// ----------------------------------------------------------------------

import { useForm } from 'react-hook-form';

import { Typography } from '@mui/material';

import { Form } from 'src/components/hook-form';

export default function DashboardView() {
  const methods = useForm();

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <Typography variant="h3" textAlign="center">
        Welcome to RUNC!
      </Typography>
      <Form methods={methods} onSubmit={onSubmit}>
        {/*
      import Field component from src/components/hook-form
      and use them based on the json file you were given :
      <Filed.Text ...hook form props />
      */}
      </Form>
    </>
  );
}
