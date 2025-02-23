
import { EmailConfig } from "@/types/email";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

interface EmailConfigListProps {
  configs: EmailConfig[];
  onEdit: (config: EmailConfig) => void;
  onDelete: (config: EmailConfig) => void;
}

export function EmailConfigList({
  configs,
  onEdit,
  onDelete,
}: EmailConfigListProps) {
  if (configs.length === 0) {
    return (
      <div className="text-center py-16 px-4">
        <Card className="max-w-md mx-auto bg-card/50 backdrop-blur-sm border shadow-lg">
          <CardContent className="pt-6 pb-8">
            <div className="relative w-16 h-16 mx-auto mb-4">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-xl" />
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary/40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <p className="text-xl text-foreground/80 font-medium mb-2">
              No configurations yet
            </p>
            <p className="text-sm text-muted-foreground">
              Add your first email configuration to start managing PDF attachments
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {configs.map((config, index) => (
        <Card
          key={config.id}
          className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-muted/30 backdrop-blur-sm card-hover animate-slide-in overflow-hidden"
          style={{
            animationDelay: `${index * 100}ms`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.02] to-primary/[0.01] opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute -inset-x-2 -inset-y-4 z-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
          </div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
            <CardTitle className="text-base font-semibold truncate">
              {config.name}
            </CardTitle>
            <Badge 
              variant="outline" 
              className="capitalize font-medium bg-background/50 backdrop-blur-sm"
            >
              {config.provider}
            </Badge>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="text-sm text-muted-foreground mb-4 truncate">
              {config.email}
            </div>
            <div className="flex justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onEdit(config)}
                className="h-8 w-8 p-0 hover:bg-background/80 hover:text-primary relative overflow-hidden group/button"
              >
                <div className="absolute inset-0 bg-primary/0 group-hover/button:bg-primary/5 transition-colors" />
                <Pencil className="h-4 w-4 relative z-10" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onDelete(config)}
                className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30 relative overflow-hidden group/button"
              >
                <div className="absolute inset-0 bg-destructive/0 group-hover/button:bg-destructive/5 transition-colors" />
                <Trash2 className="h-4 w-4 relative z-10" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
