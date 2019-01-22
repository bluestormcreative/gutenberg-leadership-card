/**
 * BLOCK: block-media
 */

// Import external dependencies.
import classnames from 'classnames';

// Import WordPress dependencies.
const { __ } = wp.i18n;
const { registerBlockType, createBlock } = wp.blocks;
const { InnerBlocks } = wp.editor;

const ALLOWED_BLOCKS = [ 'core/image' ];
const TEMPLATE = [
	[ 'core/image', { align: 'center' } ],
];

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'project/card-image', {
	title: __( 'Card Image Block' ),
	icon: 'format-image',
	parent: [ 'project/leadership-team-card' ],
	category: 'common',
	keywords: [
		__( 'Leadership Team Card' ),
	],


	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function( { attributes, className } ) {
		const classNames = classnames( className, 'wp-block-leadership-team-card__block' );

		return (
			<div className={ classNames }>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					template={ TEMPLATE }
					templateLock={ true }
				/>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save() {
		const classNames = classnames( 'wp-block-leadership-team-card__block' );

		return (
			<div className={ classNames }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
