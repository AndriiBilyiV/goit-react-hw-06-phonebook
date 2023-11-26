import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { FieldTitle, StyledForm, ValidError } from './InputForm.styled';
import { useDispatch } from 'react-redux';
import { add } from 'redux/contactsSlice';

const cardSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short').required('This field is required'),
  tel: Yup.number().required('This field is required'),
});

export const InputForm = () => {
  const dispach = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          tel: '',
        }}
        validationSchema={cardSchema}
        onSubmit={(values, actions) => {
          dispach(add(values));
          actions.resetForm();
        }}
      >
        <StyledForm>
          <FieldTitle>
            Name
            <Field name="name" />
            <ValidError name="name" component="div" />
          </FieldTitle>
          <FieldTitle>
            Number
            <Field type="number" name="tel" />
            <ValidError name="tel" component="div" />
          </FieldTitle>
          <button type="submit">Add contact</button>
        </StyledForm>
      </Formik>
    </div>
  );
};
