<?php  

/**
 * Plugin Name: Custom-Block
 * Description: Creates a new Custom Block
 * Version: 1.0
 * Author: Ahmad Tarek
 * Author URI: https://linkedin.com/in/at8oneim
 */

 if(! defined('ABSPATH')) exit;


 class CustomBlock{
    public function __construct() {
        /* We're now registering a new block from php  */
        add_action('init', array( $this,'adminAssets') );

        /* We tell wordpress to load javascript file when on block editor screen */
        // add_action('enqueue_block_editor_assets', array( $this,'adminAssets') );
    }

    function adminAssets(){
        wp_register_script('ournewblocktype',plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks','wp-element'));
        /*  register_block_type(namespace that is used in javascript, array of options)*/
        register_block_type('ourplugin/custom-block', array(
            'editor_script' => 'ournewblocktype', // which javascript to load
            'render_callback' => array($this, 'theHtml') // a function that's responsible for rendering HTML to the public on the frontend
        ));


        /* deps parameter is used here to load dependencies before loading javascript file. wp-blocks and wp-element ensure that 
        the wp Global variable is defined before used in our javascript file. */
        // wp_enqueue_script('ournewblocktype',plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks','wp-element'));
    }

    /* wordpress will pass the attributes defined in the javascript file that's saved in the database to this function*/
    function theHtml($attributes){
        ob_start(); ?>
        <h3>Today the sky is <?php echo esc_attr($attributes['skyColor']) ?> and the grass is <?php echo esc_attr($attributes['grassColor']) ?> !!!</h3>
    <?php return ob_get_clean(); // anything after ob_start() and before ob_get_clean() that's what is going to return from the function (which is the html)
        // return '<p>Today the sky is completly ' . $attributes['skyColor'] .  ' and the grass is ' . $attributes['grassColor'] . '!!!</p>';
     }
 }


 $customBlock = new CustomBlock();