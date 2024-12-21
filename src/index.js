import "./index.scss"; // wordpress will see this and will load the css file for this javascript file.
import {
  TextControl,
  Flex,
  FlexBlock,
  FlexItem,
  Button,
  Icon,
} from "@wordpress/components";
import React from "react";
/* wp.blocks.registerBlockType('namespace/custom name that is unique') */
wp.blocks.registerBlockType("ourplugin/custom-block", {
  title: "Are You Paying Attention?",
  icon: "smiley",
  category: "common",
  attributes: {
    question: { type: "string" },
    answers: { type: "array", default: ["orange", "red"] }, // we will loop on this array to output how many answers are there.
  },
  /* controls what you will see in the admin editor screen */
  edit: EditComponent,
  /* controls what  will the public see on  the frontend */
  /**
   * when the function is returning null, it means we're moving the responsibility from javascript
   * to php. this means you don't have to save static text into the database and let php to determine the value on the fly. */
  save: function (props) {
    return null;
  },
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

function EditComponent(props) {
  // return wp.element.createElement(type of html element, properties or attributes to this element, children or content for this element);
  /*
   **To create complex html to be interactive in the admin editor screen we would need
   **To use JSX that help us build Complex HTML with attributes properties easily.
   */

  /* TextControl Component passes its value to the function that's tied to the onChange event */
  function updateQuestion(value) {
    props.setAttributes({ question: value });
  }

  function deleteAnswer(indexToDelete) {
    const newAnswers = props.attributes.answers.filter(
      (answer, index) => index != indexToDelete
    );
    props.setAttributes({ answers: newAnswers });
  }
  /* We will make the block interactive in the editor screen. */
  return (
    <div className='paying-attention-edit-block'>
      <TextControl
        label='Question:'
        value={props.attributes.question}
        style={{ fontSize: "20px" }}
        onChange={updateQuestion}
      />
      <p style={{ fontSize: "13px", margin: "20px 0 8px 0" }}>Answers:</p>
      {props.attributes.answers.map((answer, index) => {
        return (
          <Flex>
            <FlexBlock>
              <TextControl
                value={answer}
                autoFocus={answer == undefined}
                onChange={(newValue) => {
                  const newAnswers = props.attributes.answers.concat([]);
                  newAnswers[index] = newValue;
                  props.setAttributes({ answers: newAnswers });
                }}
              />
            </FlexBlock>
            <FlexItem>
              <Button>
                <Icon className='mark-as-correct' icon='star-empty' />
              </Button>
            </FlexItem>
            <FlexItem>
              <Button
                isLink
                className='attention-delete'
                onClick={() => deleteAnswer(index)}
              >
                Delete
              </Button>
            </FlexItem>
          </Flex>
        );
      })}
      <Button
        isPrimary
        onClick={() => {
          props.setAttributes({
            answers: props.attributes.answers.concat([undefined]),
          });
        }}
      >
        Add another answer
      </Button>
    </div>
  );
}
