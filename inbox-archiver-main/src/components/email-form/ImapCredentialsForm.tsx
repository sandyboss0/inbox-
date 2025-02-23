
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

interface ImapCredentialsFormProps {
  form: UseFormReturn<FormValues>;
}

export function ImapCredentialsForm({ form }: ImapCredentialsFormProps) {
  return (
    <div className="space-y-4 rounded-lg bg-muted/50 p-4 animate-fade-in">
      <FormField
        control={form.control}
        name="credentials.host"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm font-medium">IMAP Host</FormLabel>
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
        name="credentials.port"
        render={({ field: { value, ...field } }) => (
          <FormItem>
            <FormLabel className="text-sm font-medium">Port</FormLabel>
            <FormControl>
              <Input
                type="number"
                {...field}
                value={value || ""}
                onChange={(e) => field.onChange(Number(e.target.value))}
                className="transition-shadow focus:shadow-md bg-background"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="credentials.password"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm font-medium">Password</FormLabel>
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
    </div>
  );
}
