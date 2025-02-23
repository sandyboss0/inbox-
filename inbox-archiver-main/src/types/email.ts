
export type EmailProvider = "gmail" | "outlook" | "imap";

export interface EmailConfig {
  id: string;
  name: string;
  email: string;
  provider: EmailProvider;
  credentials: {
    clientId?: string;
    clientSecret?: string;
    refreshToken?: string;
    host?: string;
    port?: number;
    password?: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface EmailAttachment {
  id: string;
  emailId: string;
  fileName: string;
  path: string;
  createdAt: Date;
}
