<?php
/**
 * Plugin Name: Input fields for checkout block
 * Plugin URI: https://tassawer.com/
 * Description: Custom plugin to add Order Delivery Date during checkout.
 * Author: Tassawer Hussain
 * Version: 1.0.0
 * Author URI: https://www.fiverr.com/tassawer/
 * Text Domain: order-delivery-date
 * Requires PHP: 5.6
 * WC requires at least: 3.0.0
 * WC tested up to: 7.1.0
 *
 * @package  Order-Delivery-Date-Lite-for-WooCommerce
 */


require_once 'checkout-blocks-initialize.php';

class Checkout_Block_Example {

    public function __construct() {
        add_action( 'woocommerce_store_api_checkout_update_order_from_request', array( &$this, 'orddd_update_block_order_meta_delivery_date' ), 10, 2 );
    }

    public static function orddd_update_block_order_meta_delivery_date( $order, $request ) {
        $data = isset( $request['extensions']['checkout-block-example'] ) ? $request['extensions']['checkout-block-example'] : array();

        $order->update_meta_data( 'Text für Kart', $data['gift_message'] );
        $order->update_meta_data( 'Lieferdatum', $data['delivery_date'] );

    }

}

$checkout_block_example = new Checkout_Block_Example();
