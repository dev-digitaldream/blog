CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL,
  email_normalized TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL CHECK (status IN ('pending', 'active', 'unsubscribed')),
  language TEXT NOT NULL CHECK (language IN ('fr', 'en')),
  confirmation_token_hash TEXT,
  unsubscribe_token_hash TEXT NOT NULL,
  created_at TEXT NOT NULL,
  confirmation_sent_at TEXT,
  confirmed_at TEXT,
  unsubscribed_at TEXT
);

CREATE INDEX IF NOT EXISTS newsletter_status_idx
ON newsletter_subscribers(status);

CREATE UNIQUE INDEX IF NOT EXISTS newsletter_confirmation_token_idx
ON newsletter_subscribers(confirmation_token_hash)
WHERE confirmation_token_hash IS NOT NULL;

CREATE UNIQUE INDEX IF NOT EXISTS newsletter_unsubscribe_token_idx
ON newsletter_subscribers(unsubscribe_token_hash);
