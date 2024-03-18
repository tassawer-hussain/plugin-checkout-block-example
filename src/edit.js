import { ValidatedTextInput } from '@woocommerce/blocks-checkout';
import {
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

import { __ } from '@wordpress/i18n'; 

export const Edit = ({ attributes, setAttributes }) => {
	const blockProps = useBlockProps();
	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody title={__('Block options', 'delivery_date')}>
					Options for the block go here.
				</PanelBody>
			</InspectorControls>
			<div className={ 'example-fields' }> 
                <ValidatedTextInput
                        id="delivery_date"
                        type="date"
                        required={true}
                        className={'order-datepicker'}
                        label={
                            'Lieferdatum'
                        }
                        value={ '' }
                />
			</div>
			<div className={ 'example-fields' }> 
                <ValidatedTextInput
                        id="gift_message"
                        type="text"
                        required={false}
                        className={'orddd-datepicker'}
                        label={
                            'Text für Kart'
                        }
                        value={ '' }
                />
			</div>
		</div>
	);
};
