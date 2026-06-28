import { useState } from 'react';
import { motion } from 'motion/react';
import { Edit2, Save, Trash2, Plus, UserCog } from 'lucide-react';
import { cn } from '../lib/utils';

interface Session {
  id: string;
  time: string;
  student: string;
  instructor: string;
}

const initialSessions: Session[] = [
  { id: '1', time: '06:00 AM - 07:00 AM', student: 'Rahul Verma', instructor: 'Mr. Sharma' },
  { id: '2', time: '07:30 AM - 08:30 AM', student: 'Priya Sharma', instructor: 'Mr. Rao' },
  { id: '3', time: '09:00 AM - 10:00 AM', student: 'Anil Kumar', instructor: 'Mr. Sharma' },
];

export function TrainingSessions() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [sessions, setSessions] = useState<Session[]>(initialSessions);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Omit<Session, 'id'>>({ time: '', student: '', instructor: '' });

  const handleEdit = (session: Session) => {
    setEditingId(session.id);
    setEditForm({ time: session.time, student: session.student, instructor: session.instructor });
  };

  const handleSave = (id: string) => {
    setSessions(sessions.map(s => s.id === id ? { ...s, ...editForm } : s));
    setEditingId(null);
  };

  const handleDelete = (id: string) => {
    setSessions(sessions.filter(s => s.id !== id));
  };

  const handleAdd = () => {
    const newId = Math.random().toString(36).substr(2, 9);
    setSessions([...sessions, { id: newId, time: 'New Time', student: 'New Student', instructor: 'New Instructor' }]);
    setEditingId(newId);
    setEditForm({ time: 'New Time', student: 'New Student', instructor: 'New Instructor' });
  };

  return (
    <section id="sessions" className="py-24 relative bg-brand-gray/30 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mb-4"
            >
              Training <span className="text-brand-purple-light">Sessions.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/60 max-w-2xl"
            >
              View today's scheduled driving lessons and instructor assignments.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setIsAdmin(!isAdmin)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all",
                isAdmin 
                  ? "bg-brand-purple text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]" 
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
              )}
            >
              <UserCog className="w-4 h-4" />
              {isAdmin ? "Admin Mode Active" : "Enable Admin Mode"}
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-3xl overflow-hidden border border-white/10"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-6 py-4 font-display font-medium text-white/80 uppercase text-xs tracking-wider">Time</th>
                  <th className="px-6 py-4 font-display font-medium text-white/80 uppercase text-xs tracking-wider">Student</th>
                  <th className="px-6 py-4 font-display font-medium text-white/80 uppercase text-xs tracking-wider">Instructor</th>
                  {isAdmin && <th className="px-6 py-4 font-display font-medium text-white/80 uppercase text-xs tracking-wider text-right">Actions</th>}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {sessions.map((session, i) => (
                  <tr key={session.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingId === session.id ? (
                        <input 
                          type="text" 
                          value={editForm.time}
                          onChange={(e) => setEditForm({ ...editForm, time: e.target.value })}
                          className="bg-white/10 border border-white/20 rounded px-3 py-1.5 text-white text-sm w-full focus:outline-none focus:border-brand-purple"
                        />
                      ) : (
                        <span className="text-white/90 text-sm font-medium">{session.time}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingId === session.id ? (
                        <input 
                          type="text" 
                          value={editForm.student}
                          onChange={(e) => setEditForm({ ...editForm, student: e.target.value })}
                          className="bg-white/10 border border-white/20 rounded px-3 py-1.5 text-white text-sm w-full focus:outline-none focus:border-brand-purple"
                        />
                      ) : (
                        <span className="text-white/70 text-sm">{session.student}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {editingId === session.id ? (
                        <input 
                          type="text" 
                          value={editForm.instructor}
                          onChange={(e) => setEditForm({ ...editForm, instructor: e.target.value })}
                          className="bg-white/10 border border-white/20 rounded px-3 py-1.5 text-white text-sm w-full focus:outline-none focus:border-brand-purple"
                        />
                      ) : (
                        <span className="text-white/70 text-sm">{session.instructor}</span>
                      )}
                    </td>
                    {isAdmin && (
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        {editingId === session.id ? (
                          <button 
                            onClick={() => handleSave(session.id)}
                            className="p-1.5 bg-green-500/20 text-green-400 hover:bg-green-500/30 rounded-lg transition-colors"
                          >
                            <Save className="w-4 h-4" />
                          </button>
                        ) : (
                          <div className="flex items-center justify-end gap-2">
                            <button 
                              onClick={() => handleEdit(session)}
                              className="p-1.5 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={() => handleDelete(session.id)}
                              className="p-1.5 bg-red-500/10 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </td>
                    )}
                  </tr>
                ))}
                {sessions.length === 0 && (
                  <tr>
                    <td colSpan={isAdmin ? 4 : 3} className="px-6 py-8 text-center text-white/40 text-sm">
                      No training sessions scheduled.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {isAdmin && (
            <div className="p-4 border-t border-white/10 bg-white/[0.02]">
              <button 
                onClick={handleAdd}
                className="w-full py-3 border border-dashed border-white/20 text-white/60 hover:text-white hover:border-white/40 hover:bg-white/5 rounded-xl flex items-center justify-center gap-2 transition-all text-sm font-medium"
              >
                <Plus className="w-4 h-4" />
                Add New Session
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
