import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageSEO from '../components/PageSEO';
import { Mail, Phone, Clock, CheckCircle, Circle } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const AdminMessagesPage = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, unread, read

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BACKEND_URL}/api/contact/messages`);
      if (response.data.success) {
        setMessages(response.data.messages);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (messageId) => {
    try {
      await axios.patch(`${BACKEND_URL}/api/contact/messages/${messageId}/read`);
      // Update local state
      setMessages(messages.map(msg => 
        msg.id === messageId ? { ...msg, read: true } : msg
      ));
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  };

  const filteredMessages = messages.filter(msg => {
    if (filter === 'unread') return !msg.read;
    if (filter === 'read') return msg.read;
    return true;
  });

  const unreadCount = messages.filter(msg => !msg.read).length;

  return (
    <>
      <PageSEO 
        title="Viestit | Mittalinja A1"
        description="Yhteydenottolomakkeen viestit"
        robots="noindex, nofollow"
      />
      
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        
        <main className="flex-grow pt-20">
          {/* Header */}
          <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  Yhteydenotot
                </h1>
                <p className="text-blue-100">
                  Yhteensä {messages.length} viestiä • {unreadCount} lukematonta
                </p>
              </div>
            </div>
          </section>

          {/* Filters */}
          <section className="bg-white border-b">
            <div className="container mx-auto px-4 py-4">
              <div className="max-w-6xl mx-auto flex gap-4">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === 'all'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Kaikki ({messages.length})
                </button>
                <button
                  onClick={() => setFilter('unread')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === 'unread'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Lukemattomat ({unreadCount})
                </button>
                <button
                  onClick={() => setFilter('read')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === 'read'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Luetut ({messages.length - unreadCount})
                </button>
              </div>
            </div>
          </section>

          {/* Messages */}
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto space-y-4">
                {loading ? (
                  <div className="text-center py-12">
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
                    <p className="mt-4 text-gray-600">Ladataan viestejä...</p>
                  </div>
                ) : filteredMessages.length === 0 ? (
                  <div className="text-center py-12 bg-white rounded-lg shadow">
                    <Mail className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">
                      {filter === 'unread' ? 'Ei lukemattomia viestejä' : 
                       filter === 'read' ? 'Ei luettuja viestejä' : 
                       'Ei viestejä'}
                    </p>
                  </div>
                ) : (
                  filteredMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`bg-white rounded-lg shadow hover:shadow-md transition-shadow p-6 ${
                        !message.read ? 'border-l-4 border-blue-600' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            message.read ? 'bg-gray-100' : 'bg-blue-100'
                          }`}>
                            <Mail className={`w-5 h-5 ${
                              message.read ? 'text-gray-600' : 'text-blue-600'
                            }`} />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-gray-900">
                              {message.name}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Clock className="w-4 h-4" />
                              <span>{message.timestamp}</span>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => markAsRead(message.id)}
                          disabled={message.read}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                            message.read
                              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                          }`}
                        >
                          {message.read ? (
                            <>
                              <CheckCircle className="w-4 h-4" />
                              Luettu
                            </>
                          ) : (
                            <>
                              <Circle className="w-4 h-4" />
                              Merkitse luetuksi
                            </>
                          )}
                        </button>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <a href={`mailto:${message.email}`} className="hover:text-blue-600 transition-colors">
                            {message.email}
                          </a>
                        </div>
                        {message.phone && (
                          <div className="flex items-center gap-2 text-gray-700">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <a href={`tel:${message.phone}`} className="hover:text-blue-600 transition-colors">
                              {message.phone}
                            </a>
                          </div>
                        )}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                            {message.message}
                          </p>
                        </div>
                        {message.ip_address && (
                          <div className="mt-2 text-xs text-gray-400">
                            IP: {message.ip_address}
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AdminMessagesPage;
