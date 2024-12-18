/* wp.blocks.registerBlockType('namespace/custom name that is unique') */
wp.blocks.registerBlockType('ourplugin/custom-block', {
  title: 'Are You Paying Attention?',
  icon: 'smiley',
  category: 'common',
  attributes: {
    skyColor: { type: 'string' },
    grassColor: { type: 'string' },
  },
  /* controls what you will see in the admin editor screen */
  edit: function (props) {
    // return wp.element.createElement(type of html element, properties or attributes to this element, children or content for this element);
    /*
     **To create complex html to be interactive in the admin editor screen we would need
     **To use JSX that help us build Complex HTML with attributes properties easily.
     */

    function updateSkyColor(event) {
      props.setAttributes({ skyColor: event.target.value });
    }
    function updateGrassColor(event) {
      props.setAttributes({ grassColor: event.target.value });
    }

    /* We will make the block interactive in the editor screen. */
    return (
      <div>
        <input
          type='text'
          placeholder='sky color'
          value={props.attributes.skyColor}
          onChange={updateSkyColor}
        />
        <input
          type='text'
          placeholder='grass color'
          value={props.attributes.grassColor}
          onChange={updateGrassColor}
        />
      </div>
    );
  },
  /* controls what  will the public see on  the frontend */
  /**
   * when the function is returning null, it means we're moving the responsibility from javascript
   * to php. this means you don't have to save static text into the database and let php to determine the value on the fly. */
  save: function(props){
    return null;
  }
  // save: function (props) {
  //   return (
  //     <h3>
  //       Today the sky is {props.attributes.skyColor} and the grass is
  //       {props.attributes.grassColor}
  //     </h3>
  //   ); // wordpress will take the value returned from here and save it in the database
  //   //and on the frontend will load the value of the database and doesn't load the javascript file on the frontend.
  // },
  // deprecated: [{
  //   attributes: {
  //     skyColor: { type: 'string' },
  //     grassColor: { type: 'string' },
  //   },
  //   save: function (props) {
  //     return (
  //       <p>
  //         Today the sky is {props.attributes.skyColor} and the grass is{' '}
  //         {props.attributes.grassColor}
  //       </p>
  //     ); // wordpress will take the value returned from here and save it in the database
  //     //and on the frontend will load the value of the database and doesn't load the javascript file on the frontend.
  //   }
  // }]
});
