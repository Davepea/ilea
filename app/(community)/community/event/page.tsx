import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import Image from 'next/image';
import { Event } from '@/app/types/interfaces';

interface EventsPageProps {
  events: Event[];
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
}

const EventsPage: React.FC<EventsPageProps> = ({ events, setEvents }) => {
  const handleAttendance = (eventId: number) => {
    setEvents(events => events.map(event => 
      event.id === eventId 
        ? { 
            ...event, 
            isAttending: !event.isAttending,
            attendees: event.isAttending ? event.attendees - 1 : event.attendees + 1
          }
        : event
    ));
  };

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4">
            EXCLUSIVE <span className="bg-gradient-to-r from-[#FD5E53] to-[#FD5E53] bg-clip-text text-transparent">EVENTS</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join virtual and IRL meetups, styling sessions, and behind-the-scenes access to our creative process.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => (
            <div key={event.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-[#FD5E53]/50 transition-all group">
              <div className="relative">
                <Image height={700} width={700} src={event.image} alt={event.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.type === 'virtual' ? 'bg-blue-500/20 text-blue-300' : 'bg-green-500/20 text-green-300'
                  }`}>
                    {event.type === 'virtual' ? 'Virtual' : 'In Person'}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1">
                    <div className="flex items-center text-white text-sm">
                      <Users className="w-4 h-4 mr-1" />
                      {event.attendees}/{event.maxAttendees}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{event.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-300 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mb-4">
                  {event.tags.map(tag => (
                    <span key={tag} className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">#{tag}</span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    Hosted by {event.host}
                  </div>
                  <button 
                    onClick={() => handleAttendance(event.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      event.isAttending 
                        ? 'bg-green-500/20 text-green-300 border border-green-500/50' 
                        : 'bg-[#FD5E53] text-white hover:bg-purple-600'
                    }`}
                  >
                    {event.isAttending ? 'Attending' : 'Join Event'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;