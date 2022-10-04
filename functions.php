<?php

// =============================================================================
// FUNCTIONS.PHP
// -----------------------------------------------------------------------------
// Overwrite or add your own custom functions to Pro in this file.
// =============================================================================

// =============================================================================
// TABLE OF CONTENTS
// -----------------------------------------------------------------------------
//   01. Enqueue Parent Stylesheet
//   02. Additional Functions
// =============================================================================

// Enqueue Parent Stylesheet
// =============================================================================

add_filter('x_enqueue_parent_stylesheet', '__return_true');



// Additional Functions
// =============================================================================
function child_enqueue_styles() {
    // enqueue child styles
    wp_enqueue_style('fmcStyles', get_stylesheet_directory_uri() . '/build/index.css', array(), '1.3.1');
    wp_enqueue_script('fmcJS', get_stylesheet_directory_uri() . '/build/index.js', array(), '2.1', true);
    wp_localize_script('fmc-data', 'fmcData', array(
        'root_url' => get_site_url(),
        'day' => date('D'),
        'year' => date('T')
    ));
}
add_action('wp_enqueue_scripts', 'child_enqueue_styles');

// add_action('init', 'add_cors_http_header');
// function add_cors_http_header() {
//     header("Access-Control-Allow-Origin: https://cdn.shortpixel.ai/spai/*");
// }
function fmc_post_types() {
    register_post_type('fmc-events', array(
        'has_archive' => true,
        'labels' => array(
            'name' => 'Events',
            'add_new_item' => "Add New Event",
            'edit_item' => 'Edit Event',
            'all_items' => 'All Events',
            'singular_name' => 'Event'
        ),
        'menu-icon' => 'dashicons-calendar-alt',
        'menu_position' => 5,
        'public' => true,
        'show_in_rest' => true,
        'supports' => array(
            'title', 'editor', 'comments', 'revisions', 'trackbacks', 'excerpt', 'thumbnail'
        )
    ));
}
add_action('init', 'fmc_post_types');