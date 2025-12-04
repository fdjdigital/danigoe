<?php
define( 'WP_CACHE', true );

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u536411771_XV2ZX' );

/** Database username */
define( 'DB_USER', 'u536411771_YElHE' );

/** Database password */
define( 'DB_PASSWORD', 'wOQfCVy6im' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'Y[o>5rgX;Wcu;cK0`<sp[`7k%.Ea.z,a-w(w<6y`S`1n_I?lpk}oxT?_C%C}Ll3c' );
define( 'SECURE_AUTH_KEY',   ';CA:%T:br)_cd(,vOTpaTMiR614mQ^&~bn5UEM6P-u[5 @LMnO9?)%}G8Q;>bz_@' );
define( 'LOGGED_IN_KEY',     'W Fb6KdUs(@e16i96Hs g(OwABeZU{!+eu=g,3GGHllbt]BZ*kRzVD&eAvT;wkMx' );
define( 'NONCE_KEY',         '>x:ht~[VK3yRwSqF]s-:V5elkl9J$&94pYV9]:GP?T0wYT&.c0ZZijhsZ|<+s0o:' );
define( 'AUTH_SALT',         '.[-.?_7`z?/5RLc?ih:7v[RDZ*/xHp`V lJ;V,vZm|fxf1|_z94$8%7X$hulX7]5' );
define( 'SECURE_AUTH_SALT',  'KVn_Jqwbf}Z8ltITId:;Bg;95KN&P!YjAp$WcKy-ig{J9)W]_KPM1if.xOeyoSQ:' );
define( 'LOGGED_IN_SALT',    'MM&Ko1uZA?my?5I/Ut[lm31G&TfH7tewL5PR:u5}j,_by-(m$5{$mEBV4Tx,#W8x' );
define( 'NONCE_SALT',        'L`x%ErCeG9Xp!x.j!)Odajji%nj}d!kO3aeEqY>ZVjJbEu~qAl3[;qMp9d(QV>yx' );
define( 'WP_CACHE_KEY_SALT', 'FBr,;aT LZa_+kJLZx7AQM%{-<n#zR(8[qI)n^f3/w-2NM<_;* zu>bwWg(a54:a' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'FS_METHOD', 'direct' );
define( 'COOKIEHASH', '5725507eebf778442b498ef4427817d2' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
