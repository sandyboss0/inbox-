
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { type UseFormReturn } from "react-hook-form";
import { type FormValues } from "./types";

interface GmailCredentialsFormProps {
  form: UseFormReturn<FormValues>;
}

export function GmailCredentialsForm({ form }: GmailCredentialsFormProps) {
  return (
    <div className="space-y-4 rounded-lg bg-muted/50 p-4 animate-fade-in">
      <FormField
        control={form.control}
        name="credentials.clientId"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm font-medium">Client ID</FormLabel>
            <FormControl>
              <Input 
                {...field}
                className="transition-shadow focus:shadow-md bg-background"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="credentials.clientSecret"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm font-medium">Client Secret</FormLabel>
            <FormControl>
              <Input 
                type="password" 
                {...field}
                className="transition-shadow focus:shadow-md bg-background"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="credentials.refreshToken"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm font-medium">Refresh Token</FormLabel>
            <FormControl>
              <Input 
                {...field}
                className="transition-shadow focus:shadow-md bg-background"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
