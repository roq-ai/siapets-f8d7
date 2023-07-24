import * as yup from 'yup';

export const animalValidationSchema = yup.object().shape({
  microchip_number: yup.string().required(),
  user_id: yup.string().nullable(),
});
