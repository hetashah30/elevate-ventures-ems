
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";

// Sample events with images
const events = [
  {
    id: 1,
    title: "Corporate Excellence Awards",
    description: "Annual corporate gala celebrating industry achievements",
    date: "March 15, 2024",
    category: "Corporate",
    image: "https://www.augustawards.com/wp-content/uploads/2024/02/British-Business-Excellence-Awards-with-Lloyds-Bank-Finalists-and-Winners-0W5A1792-Enhanced-NR.jpg",
  },
  {
    id: 2,
    title: "Emma & John's Wedding",
    description: "Elegant beachside wedding ceremony",
    date: "February 12, 2024",
    category: "Wedding",
    image: "https://www.grandweddings.co.in/wp-content/uploads/2020/01/Top-Wedding-Event-Management-Companies-in-Hyderabad.jpg",
  },
  {
    id: 3,
    title: "TechStart Product Launch",
    description: "Revolutionary tech product unveiling event",
    date: "January 28, 2024",
    category: "Product Launch",
    image: "https://miro.medium.com/v2/resize:fit:4000/1*rfNiNUVSKMAocn_HUKUFhg.jpeg",
  },
  {
    id: 4,
    title: "Sophia's Sweet 16",
    description: "Magical night for a special birthday celebration",
    date: "December 10, 2023",
    category: "Birthday",
    image: "https://kitchendocs.com/wp-content/uploads/2021/10/BohoChicSweet16_Backyard_Party_View.jpg",
  },
  {
    id: 5,
    title: "Annual Charity Gala",
    description: "Fundraising event for local community initiatives",
    date: "November 25, 2023",
    category: "Charity",
    image: "https://gulfforgood.org/wp-content/uploads/2024/05/G4G-Gala-2022-161-700x465.jpg",
  },
  {
    id: 6,
    title: "Music Festival",
    description: "Three-day outdoor music extravaganza",
    date: "October 15-17, 2023",
    category: "Festival",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Corporate Retreat",
    description: "Team-building weekend at mountain resort",
    date: "September 5-7, 2023",
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "New Year's Eve Bash",
    description: "Countdown celebration at the Grand Hotel",
    date: "December 31, 2023",
    category: "Holiday",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    title: "Fashion Show",
    description: "Runway event for upcoming designer collections",
    date: "August 20, 2023",
    category: "Fashion",
    image: "https://www.couturefashionweek.com/wp-content/uploads/2015/03/cfw-runway3.jpg",
  }
];

export default function GalleryGrid() {
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  // Get unique categories for filter
  const categories = ["All", ...Array.from(new Set(events.map(event => event.category)))];

  // Filter events based on selected category
  const filteredEvents = filter === "All" 
    ? events 
    : events.filter(event => event.category === filter);

  return (
    <div className="container py-8">
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === category
                ? 'bg-elevate-purple text-white'
                : 'bg-muted hover:bg-elevate-purple/20'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map(event => (
          <Card
            key={event.id}
            className="overflow-hidden border border-border hover:shadow-lg transition-all cursor-pointer group"
            onClick={() => {
              setSelectedEvent(event);
              setDialogOpen(true);
            }}
          >
            <div className="relative h-60 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-elevate-dark/70 to-transparent flex items-end p-4">
                <div>
                  <p className="text-xs font-medium text-elevate-gold mb-1">{event.category}</p>
                  <h3 className="font-display text-lg font-medium text-white">{event.title}</h3>
                  <p className="text-xs text-white/80">{event.date}</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-3xl p-0 overflow-hidden">
          {selectedEvent && (
            <div>
              <div className="relative h-72 sm:h-96">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="font-display text-2xl font-semibold">{selectedEvent.title}</h2>
                  <span className="bg-elevate-purple/10 text-elevate-purple px-3 py-1 rounded-full text-xs font-medium">
                    {selectedEvent.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{selectedEvent.date}</p>
                <p className="text-foreground">{selectedEvent.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
