import React, { Fragment } from "react";

import Button from "@atlaskit/button/standard-button";
import Form, { Field, FormFooter, HelperMessage } from "@atlaskit/form";

import Textfield from "@atlaskit/textfield";

export default function CtaSubmit() {
  return (
    <Form>
      {({ formProps }) => (
        <form {...formProps}>
          <Field label="Enter your Email" name="example-text">
            {({ fieldProps }) => (
              <Fragment>
                <Textfield placeholder="Type here..." {...fieldProps} />
                <HelperMessage>Introduce a valid e-mail.</HelperMessage>
              </Fragment>
            )}
          </Field>
          <FormFooter>
            <Button type="submit" appearance="primary">
              Submit
            </Button>
          </FormFooter>
        </form>
      )}
    </Form>
  );
}
