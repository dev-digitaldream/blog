<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" encoding="UTF-8"/>
<xsl:template match="/">
<html lang="fr"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>RSS · Le Carnet de DD</title>
<style>
body{margin:0;background:#f5eeda;color:#2c3252;font:18px/1.6 Georgia,serif}main{max-width:760px;margin:auto;padding:48px 24px}a{color:#a83521;text-underline-offset:4px}h1,h2{line-height:1.25}h1{font-size:2.2rem}h2{font-size:1.35rem}article{padding:20px 0;border-bottom:1px solid #e6dab6}code{display:block;overflow-wrap:anywhere;padding:16px;background:#fdf9ec;font-size:15px}small{color:#5d637f}@media(prefers-color-scheme:dark){body{background:#1b1f31;color:#ece8d8}a{color:#ec8a74}code{background:#262c46}article{border-color:#3a4266}small{color:#aeb2c9}}
</style></head><body><main>
<a href="/">← Le Carnet de DD</a><h1>Suivre le carnet par RSS</h1>
<p>Les articles français et anglais réunis dans un flux. Pour recevoir les prochains billets, copier cette adresse dans un lecteur RSS :</p>
<code>https://blog.digitaldream.work/rss.xml</code>
<p>French and English posts in one feed. Add this address to your RSS reader to subscribe.</p>
<xsl:for-each select="rss/channel/item"><article><h2><a href="{link}"><xsl:value-of select="title"/></a></h2><small><xsl:value-of select="pubDate"/></small><p><xsl:value-of select="description"/></p></article></xsl:for-each>
</main></body></html>
</xsl:template></xsl:stylesheet>
