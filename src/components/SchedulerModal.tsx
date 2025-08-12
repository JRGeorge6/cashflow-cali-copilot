import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface SchedulerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SchedulerModal = ({ open, onOpenChange }: SchedulerModalProps) => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSubmitting(true);
    try {
      // In a real app, send to your backend or Supabase storage
      console.log("Lead submission:", Object.fromEntries(data.entries()));
      toast({ title: "Thanks!", description: "We’ll reach out shortly." });
      form.reset();
      onOpenChange(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Book a 15-minute call</DialogTitle>
          <DialogDescription>
            Pick a time or leave your details—we’ll help place your EPI terminal fast.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6">
          <div className="rounded-md border p-4">
            <div className="aspect-video w-full rounded bg-muted flex items-center justify-center text-sm text-muted-foreground">
              Your scheduler embed goes here (Calendly, SavvyCal, etc.)
            </div>
          </div>

          <div className="text-sm text-muted-foreground">Prefer not to book now? Leave your info:</div>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Full name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="business">Business</Label>
                <Input id="business" name="business" placeholder="Business name" required />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@business.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" placeholder="(555) 555-5555" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="statement">Upload recent statement (optional)</Label>
              <Input id="statement" name="statement" type="file" />
            </div>
            <div className="flex items-center justify-end gap-3">
              <Button type="button" variant="ghost" onClick={() => onOpenChange(false)}>Cancel</Button>
              <Button type="submit" disabled={submitting} variant="hero">
                {submitting ? "Sending…" : "Send"}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SchedulerModal;
