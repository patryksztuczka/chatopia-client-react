import { useForm, Controller, SubmitHandler } from "react-hook-form";

import Button from "../button";
import Input from "../input";
import { ILoginForm } from "../../utils/types/forms";
import { supabase } from "../../libs/supabase/config";

const LoginPage = () => {
  const { control, handleSubmit } = useForm<ILoginForm>();

  const onSubmit: SubmitHandler<ILoginForm> = async ({ email, password }) => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
  };

  return (
    <div>
      LoginPage
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          defaultValue=""
          render={({ field: { name, value, onChange } }) => <Input name={name} value={value} placeholder="Username" onChange={onChange} />}
        />
        <Controller
          control={control}
          name="password"
          defaultValue=""
          render={({ field: { name, value, onChange } }) => <Input name={name} value={value} placeholder="Password" onChange={onChange} />}
        />
        <Button type="submit">Log in</Button>
      </form>
    </div>
  );
};

export default LoginPage;
