
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import { toast } from "sonner";
import { type EmailProvider } from "@/types/email";
import { BaseFormFields } from "./email-form/BaseFormFields";
import { GmailCredentialsForm } from "./email-form/GmailCredentialsForm";
import { ImapCredentialsForm } from "./email-form/ImapCredentialsForm";
import { formSchema, type FormValues } from "./email-form/types";

interface EmailConfigFormProps {
  onSubmit: (values: FormValues) => void;
  initialValues?: FormValues;
}

export function EmailConfigForm({ onSubmit, initialValues }: EmailConfigFormProps) {
  const [provider, setProvider] = useState<EmailProvider>(
    initialValues?.provider || "gmail"
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues || {
      name: "",
      email: "",
      provider: "gmail",
      credentials: {},
    },
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      await onSubmit(values);
      form.reset();
      toast.success("Email configuration saved successfully!");
    } catch (error) {
      toast.error("Failed to save email configuration");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-6 animate-fade-in"
      >
        <div className="space-y-6">
          <BaseFormFields form={form} onProviderChange={setProvider} />

          {provider === "gmail" && <GmailCredentialsForm form={form} />}
          {provider === "imap" && <ImapCredentialsForm form={form} />}
        </div>

        <Button 
          type="submit" 
          className="w-full hover:shadow-lg hover:shadow-primary/20 transition-shadow"
        >
          Save Configuration
        </Button>
      </form>
    </Form>
  );
}
