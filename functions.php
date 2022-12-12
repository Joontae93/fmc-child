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
    wp_enqueue_style('fmcStyles', get_stylesheet_directory_uri() . '/build/index.css', array(), '3.2.0');
    wp_enqueue_script('fmcJS', get_stylesheet_directory_uri() . '/build/index.js', array(), '2.3.6', true);
    wp_localize_script('fmcJS', 'fmcData', array(
        'root_url' => get_site_url(),
        'today' => array(
            'month' => date('n'),
            'dayNum' => date('j'),
            'day' => date('D'),
            'year' => date('Y'),
        )
    ));
    wp_enqueue_script('planningCenterForm', 'https://js.churchcenter.com/modal/v1', array(), false, true);
}
add_action('wp_enqueue_scripts', 'child_enqueue_styles');