
import { useState } from "react";
import { EmailConfigForm } from "@/components/EmailConfigForm";
import { EmailConfigList } from "@/components/EmailConfigList";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import type { EmailConfig } from "@/types/email";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function IndexPage() {
  const [showForm, setShowForm] = useState(false);
  const [configs, setConfigs] = useState<EmailConfig[]>([]);
  const [editingConfig, setEditingConfig] = useState<EmailConfig | null>(null);

  const handleSubmit = (values: any) => {
    if (editingConfig) {
      setConfigs(
        configs.map((config) =>
          config.id === editingConfig.id
            ? { ...editingConfig, ...values }
            : config
        )
      );
      setEditingConfig(null);
    } else {
      setConfigs([
        ...configs,
        {
          id: Math.random().toString(),
          ...values,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    }
    setShowForm(false);
  };

  const handleEdit = (config: EmailConfig) => {
    setEditingConfig(config);
    setShowForm(true);
  };

  const handleDelete = (config: EmailConfig) => {
    setConfigs(configs.filter((c) => c.id !== config.id));
  };

  return (
    <div className="relative min-h-screen pb-12 pt-6">
      {/* Background decoration */}
      <div className="pointer-events-none fixed inset-0 select-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] [mask-image:radial-gradient(white,transparent_85%)]" />
        <div className="absolute inset-0">
          <div className="absolute -left-32 top-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute right-0 top-1/4 h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-[100px]" />
          <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-[100px]" />
        </div>
      </div>

      {/* Main content */}
      <div className="container relative max-w-7xl mx-auto px-4 animate-fade-in">
        {/* Header section */}
        <div className="relative mb-12 text-center md:text-left">
          <div className="absolute -left-8 -top-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-50" />
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl opacity-50" />
          
          <div className="relative space-y-4 py-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-foreground via-foreground/80 to-foreground/50 bg-clip-text text-transparent">
                Email Configurations
              </span>
            </h1>
            <p className="max-w-2xl mx-auto md:mx-0 text-muted-foreground/80 text-lg">
              Manage your email accounts and PDF attachments seamlessly with our intuitive interface
            </p>
          </div>

          {!showForm && (
            <div className="mt-8 flex justify-center md:justify-start">
              <Button 
                onClick={() => setShowForm(true)}
                className="relative overflow-hidden group hover-float transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:shadow-lg hover:shadow-primary/20"
                size="lg"
              >
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
                <div className="relative flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  <span>Add Configuration</span>
                </div>
              </Button>
            </div>
          )}
        </div>

        <Separator className="my-8 md:my-12 opacity-50" />

        {/* Content section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent pointer-events-none h-20" />
          
          {showForm ? (
            <div className="max-w-2xl mx-auto">
              <Card className="backdrop-blur-sm bg-card/50 border shadow-lg animate-fade-in overflow-hidden">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                  <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary/10 to-blue-500/30 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                      clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                  />
                </div>
                <div className="relative p-6">
                  <EmailConfigForm
                    onSubmit={handleSubmit}
                    initialValues={editingConfig || undefined}
                  />
                  <div className="mt-4 text-center">
                    <Button
                      variant="ghost"
                      onClick={() => {
                        setShowForm(false);
                        setEditingConfig(null);
                      }}
                      className="hover:bg-background/80"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          ) : (
            <EmailConfigList
              configs={configs}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </div>
      </div>
    </div>
  );
}
