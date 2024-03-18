<?php

use Automattic\WooCommerce\StoreApi\StoreApi;
use Automattic\WooCommerce\StoreApi\Schemas\ExtendSchema;
use Automattic\WooCommerce\StoreApi\Schemas\V1\CheckoutSchema;

add_action(
    'woocommerce_blocks_loaded',
    function() {
        require_once 'class-blocks-integration.php';
        add_action(
            'woocommerce_blocks_checkout_block_registration',
            function( $integration_registry ) {
                $integration_registry->register( new Blocks_Integration() );
            }
        );

        if ( function_exists( 'woocommerce_store_api_register_endpoint_data' ) ) {
            woocommerce_store_api_register_endpoint_data(
                array(
                    'endpoint'        => CheckoutSchema::IDENTIFIER,
                    'namespace'       => 'checkout-block-example',
                    'data_callback'   => 'cb_data_callback',
                    'schema_callback' => 'cb_schema_callback',
                    'schema_type'     => ARRAY_A,
                )
            );
        }
    }
);


/**
 * Callback function to register endpoint data for blocks.
 *
 * @return array
 */
function cb_data_callback() {
	return array(
		'gift_message' => '',
		'delivery_date' => '',
	);
}

/**
 * Callback function to register schema for data.
 *
 * @return array
 */
function cb_schema_callback() {
	return array(
		'gift_message'  => array(
			'description' => __( 'Text für Kart', 'checkout-block-example' ),
			'type'        => array( 'string', 'null' ),
			'readonly'    => true,
		),
        'delivery_date'  => array(
			'description' => __( 'Lieferdatum', 'checkout-block-example' ),
			'type'        => array( 'string', 'null' ),
			'readonly'    => true,
		),
	);
}