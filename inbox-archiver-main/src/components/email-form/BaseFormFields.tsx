
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { type UseFormReturn } from "react-hook-form";
import { type EmailProvider } from "@/types/email";
import { type FormValues } from "./types";

interface BaseFormFieldsProps {
  form: UseFormReturn<FormValues>;
  onProviderChange: (value: EmailProvider) => void;
}

export function BaseFormFields({ form, onProviderChange }: BaseFormFieldsProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm font-medium">Configuration Name</FormLabel>
            <FormControl>
              <Input 
                placeholder="Personal Gmail" 
                {...field}
                className="transition-shadow focus:shadow-md"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm font-medium">Email Address</FormLabel>
            <FormControl>
              <Input 
                placeholder="you@example.com" 
                {...field}
                className="transition-shadow focus:shadow-md"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="provider"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm font-medium">Email Provider</FormLabel>
            <Select
              onValueChange={(value: EmailProvider) => {
                field.onChange(value);
                onProviderChange(value);
              }}
              defaultValue={field.value}
            >
              <FormControl>
                <SelectTrigger className="transition-shadow focus:shadow-md">
                  <SelectValue placeholder="Select a provider" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="gmail">Gmail</SelectItem>
                <SelectItem value="outlook">Outlook</SelectItem>
                <SelectItem value="imap">IMAP</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
