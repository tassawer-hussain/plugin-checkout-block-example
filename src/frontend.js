import metadata from './block.json';
import { ValidatedTextInput } from '@woocommerce/blocks-checkout';
import { __ } from '@wordpress/i18n';
import { useEffect, useState, useCallback } from '@wordpress/element';

// Global import
const { registerCheckoutBlock } = wc.blocksCheckout;

const Block = ({ children, checkoutExtensionData }) => { 

	const [ giftMessage, setGiftMessage ] = useState('');
    const [ deliveryDate, setDeliveryDate ] = useState('');
    
    const { setExtensionData } = checkoutExtensionData;

    useEffect( () => {
        setExtensionData( 'checkout-block-example', 'gift_message', giftMessage  );
	}, [] );

    const onInputChange = useCallback(
		( value ) => {
			setGiftMessage( value );
			setExtensionData( 'checkout-block-example', 'gift_message', value );
		},
		[ setGiftMessage. setExtensionData ]
	)

    useEffect( () => {
        setExtensionData( 'checkout-block-example', 'delivery_date', deliveryDate  );
	}, [] );

    const onDateChange = useCallback(
		( value ) => {
			setDeliveryDate( value );
			setExtensionData( 'checkout-block-example', 'delivery_date', value );
		},
		[ setDeliveryDate. setExtensionData ]
	)

    return (
        <div className="th-wrapper">
            <div className={ 'example-fields' }> 
                <ValidatedTextInput
                        id="delivery_date"
                        type="date"
                        required={true}
                        className={'order-datepicker'}
                        label={
                            'Lieferdatum'
                        }
                        value={ deliveryDate }
                        onChange={ onDateChange }
                />
            </div>
            <div className={ 'example-fields' }> 
                <ValidatedTextInput
                        id="gift_message"
                        type="text"
                        required={false}
                        className={'gift-message'}
                        label={
                            'Text für Kart'
                        }
                        value={ giftMessage }
                        onChange={ onInputChange }
                />
            </div>
        </div>
    )
}

const options = {
	metadata,
	component: Block
};

registerCheckoutBlock( options );
