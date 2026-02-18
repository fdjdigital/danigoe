<?php
// Temporary cache purge script - delete after use
header('Content-Type: text/plain');

// LiteSpeed cache purge
if (function_exists('litespeed_purge_all')) {
    litespeed_purge_all();
    echo "LiteSpeed cache purged via API\n";
}

// Try header-based purge
header('X-LiteSpeed-Purge: *');
echo "X-LiteSpeed-Purge header sent\n";

// Clear PHP opcache
if (function_exists('opcache_reset')) {
    opcache_reset();
    echo "OPcache cleared\n";
}

echo "Done - DELETE THIS FILE\n";
