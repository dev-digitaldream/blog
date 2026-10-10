---
title: "Retrieve a Linux log file from a Mac with SSH and SCP"
description: "A focused procedure for copying a Linux log file to a Mac: SSH access, the remote path, the transfer, and limitations of older machines."
date: 2026-10-10
lang: en
translation: recuperer-logs-linux-mac-ssh-scp
draft: true
category: blog
tags: [macOS, Linux, SSH, SCP, SFTP]
cover: ""
excerpt: "Retrieving logs is part of my everyday work. This terminal procedure handles one specific file, using examples that need to be adapted to the remote machine."
metaTitle: "Retrieve Linux logs on Mac with SSH and SCP"
metaDescription: "Copy a Linux log file to a Mac using SSH and scp: prerequisites, ports, permissions, and the case of an older server without SFTP."
---
Retrieving logs from Linux machines is part of my everyday work. It is one of the needs that led me to [build macSCP](/blog/macscp-file-transfer-tool-missing-on-mac/), to get a graphical interface that suits my habits.

Here I start with a narrower task: bringing one specific file back to the Mac from the terminal. This procedure does not depend on my app, which remains a personal project with no public download. The commands below are documented examples, not an account of an intervention on a particular machine.

## What needs to be known before the transfer

The prerequisites are network access to the machine, an accessible SSH server, an authorized account, and the path to a file that account can read. In these examples, `user@linux.example`, port `22`, and `/var/log/my-service/app.log` are fictional and must be replaced.

All commands run in Terminal on the Mac. The client version can be checked with:

```sh
ssh -V
```

This guide covers logs stored in a file. It assumes neither that all distributions use the same path nor that the systemd journal is a directly downloadable text file.

## Check access and the path

Before copying, this command asks the remote machine to display the file information:

```sh
ssh -p 22 user@linux.example 'ls -l /var/log/my-service/app.log'
```

The [SSH documentation](https://man.openbsd.org/ssh) describes server key verification. On the first connection, the server key fingerprint must match the one confirmed by the administrator or a trusted source. A changed-key warning calls for verification, not automatic removal of the old entry.

If the file does not exist or access is denied, the transfer is not ready. The correct path and read permissions need to be resolved on the server with its administrator, without opening permissions on an entire directory to work around the problem.

## Copy into a separate local directory

I keep the download separate in a new directory, created inside the terminal’s current working directory:

```sh
LOG_DIR="$(mktemp -d "$PWD/logs-linux.XXXXXX")"
```

This command must succeed before the next one. The directory has a generated suffix, keeping this download separate from an earlier one.

```sh
scp -P 22 user@linux.example:/var/log/my-service/app.log "$LOG_DIR/"
```

The port option is `-p` for `ssh`, but `-P` for `scp`. The [scp documentation](https://man.openbsd.org/scp) describes these options.

After a transfer completes without an error, the local file can be found with:

```sh
ls -lh "$LOG_DIR/app.log"
```

A log file can continue changing on the server while it is copied. This method retrieves a file; it does not promise a consistent snapshot of every log involved in an incident.

## The catch with older machines: scp can use SFTP

Since [OpenSSH 9.0](https://www.openssh.org/txt/release-9.0), `scp` uses SFTP by default. The command’s name alone does not identify the protocol being used.

For a machine that accepts SSH but does not provide SFTP, a client supporting the `-O` option can use the legacy SCP protocol:

```sh
scp -O -P 22 user@linux.example:/var/log/my-service/app.log "$LOG_DIR/"
```

That case needs to be identified before changing the command. `-O` fixes neither an incorrect account, insufficient permissions, nor an SSH negotiation failure. I keep an explicit path here, without wildcards or special characters.

## What this retrieval provides, and what remains open

The goal is modest: having the file on the Mac to examine it. Before sending this log or publishing a screenshot, identifiers, addresses, and confidential data need to be removed from the copy intended for sharing.

For repeated transfers and browsing directories, my workflow remains the one described in the macSCP note. The terminal provides an independent procedure for a known file here. The other notes in this thread are grouped under [working on Mac with Linux and Windows](/en/topics/apple-and-tools/).
