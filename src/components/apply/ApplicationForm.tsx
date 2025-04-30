// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Calendar } from "@/components/ui/calendar";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { format } from "date-fns";
// import { Calendar as CalendarIcon } from "lucide-react";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Card, CardContent } from "@/components/ui/card";
// import { toast } from 'sonner';
// import { cn } from '@/lib/utils';

// export default function ApplicationForm() {
//   const navigate = useNavigate();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [date, setDate] = useState<Date | undefined>();
  
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     eventType: '',
//     guestCount: '',
//     budget: '',
//     venuePreference: '',
//     additionalNotes: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSelectChange = (name: string, value: string) => {
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Validate form data
//     if (!formData.name || !formData.email || !formData.phone || !formData.eventType || !date) {
//       toast.error("Please fill out all required fields.");
//       return;
//     }
    
//     setIsSubmitting(true);
    
//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 2000));
      
//       // In a real app, you would submit to your backend here
//       console.log("Form submitted:", { ...formData, eventDate: date });
      
//       toast.success("Your application has been submitted successfully! We'll be in touch soon.");
      
//       // Redirect to thank you page or home
//       setTimeout(() => navigate('/'), 2000);
//     } catch (error) {
//       toast.error("Something went wrong. Please try again later.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

// const handleBudgetSelect = (budget: string) => {
//   setFormData(prev => ({ ...prev, budget }));
// };

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ref, push } from 'firebase/database';
import { db } from '@/firebaseConfig';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

export default function ApplicationForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [date, setDate] = useState<Date | undefined>();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    guestCount: '',
    budget: '',
    venuePreference: '',
    additionalNotes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBudgetSelect = (budget: string) => {
    setFormData(prev => ({ ...prev, budget }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.eventType || !date) {
      toast.error("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const applicationRef = ref(db, 'applications');
      await push(applicationRef, {
        ...formData,
        eventDate: date.toISOString(),
        submittedAt: new Date().toISOString()
      });

      toast.success("Your application has been submitted successfully! We'll be in touch soon.");

      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name <span className="text-destructive">*</span></Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address <span className="text-destructive">*</span></Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number <span className="text-destructive">*</span></Label>
          <Input
            id="phone"
            name="phone"
            placeholder="(555) 123-4567"
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="eventDate">Event Date <span className="text-destructive">*</span></Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
                disabled={isSubmitting}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Select a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => date < new Date()}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="eventType">Event Type <span className="text-destructive">*</span></Label>
          <Select
            disabled={isSubmitting}
            onValueChange={(value) => handleSelectChange("eventType", value)}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select event type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Event Types</SelectLabel>
                <SelectItem value="wedding">Wedding</SelectItem>
                <SelectItem value="corporate">Corporate Event</SelectItem>
                <SelectItem value="birthday">Birthday Party</SelectItem>
                <SelectItem value="productLaunch">Product Launch</SelectItem>
                <SelectItem value="social">Social Gathering</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="guestCount">Estimated Guest Count</Label>
          <Select
            disabled={isSubmitting}
            onValueChange={(value) => handleSelectChange("guestCount", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select guest count range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-50">1-50 guests</SelectItem>
              <SelectItem value="51-100">51-100 guests</SelectItem>
              <SelectItem value="101-250">101-250 guests</SelectItem>
              <SelectItem value="251-500">251-500 guests</SelectItem>
              <SelectItem value="500+">500+ guests</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-4">
        <Label>Budget Range</Label>
        <RadioGroup 
          defaultValue={formData.budget} 
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          onValueChange={handleBudgetSelect}
        >
          <Card 
            className={cn(
              "cursor-pointer relative border-2 transition-all hover:shadow",
              formData.budget === "economy" && "border-elevate-purple"
            )}
            onClick={() => handleBudgetSelect("economy")}
          >
            <RadioGroupItem
              value="economy"
              id="budget-economy"
              className="sr-only"
              disabled={isSubmitting}
            />
            <Label
              htmlFor="budget-economy"
              className="cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="font-display font-semibold">Economy</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Basic event planning with essential services
                </p>
                <div className="mt-4 text-elevate-purple font-medium">$1,000 - $5,000</div>
              </CardContent>
            </Label>
          </Card>
          
          <Card 
            className={cn(
              "cursor-pointer relative border-2 transition-all hover:shadow",
              formData.budget === "standard" && "border-elevate-purple"
            )}
            onClick={() => handleBudgetSelect("standard")}
          >
            <RadioGroupItem
              value="standard"
              id="budget-standard"
              className="sr-only"
              disabled={isSubmitting}
            />
            <Label
              htmlFor="budget-standard"
              className="cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="font-display font-semibold">Standard</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Complete event management with premium touches
                </p>
                <div className="mt-4 text-elevate-purple font-medium">$5,000 - $15,000</div>
              </CardContent>
            </Label>
          </Card>
          
          <Card 
            className={cn(
              "cursor-pointer relative border-2 transition-all hover:shadow",
              formData.budget === "luxury" && "border-elevate-purple"
            )}
            onClick={() => handleBudgetSelect("luxury")}
          >
            <RadioGroupItem
              value="luxury"
              id="budget-luxury"
              className="sr-only"
              disabled={isSubmitting}
            />
            <Label
              htmlFor="budget-luxury"
              className="cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="font-display font-semibold">Luxury</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Exclusive high-end event with luxurious details
                </p>
                <div className="mt-4 text-elevate-purple font-medium">$15,000+</div>
              </CardContent>
            </Label>
          </Card>
        </RadioGroup>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="venuePreference">Venue Preference</Label>
        <Select
          disabled={isSubmitting}
          onValueChange={(value) => handleSelectChange("venuePreference", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select venue type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="indoor">Indoor</SelectItem>
            <SelectItem value="outdoor">Outdoor</SelectItem>
            <SelectItem value="both">Combination of Both</SelectItem>
            <SelectItem value="undecided">Undecided / Need Suggestions</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="additionalNotes">Additional Notes or Requirements</Label>
        <Textarea
          id="additionalNotes"
          name="additionalNotes"
          placeholder="Tell us more about your vision for this event..."
          rows={5}
          value={formData.additionalNotes}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>
      
      <div className="flex justify-end">
        <Button 
          type="submit" 
          className="bg-elevate-purple hover:bg-elevate-purple/90 px-10 py-6 text-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </div>
    </form>
  );
}
