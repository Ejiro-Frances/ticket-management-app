import { useState, useEffect } from "react";
import DashboardHeader from "../components/shared/dashboardheader";
import TicketForm from "../components/tickets/ticketform";
import { createTicket } from "../utils/ticketservice";
import toast from "react-hot-toast";
import type { TicketFormData, Ticket } from "../types/types";
import TicketCard from "../components/tickets/ticketcard";

const TicketPage = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("tickets");
    if (stored) setTickets(JSON.parse(stored));
  }, []);

  const handleDelete = (id: number) => {
    const updated = tickets.filter((t) => t.id !== id);
    setTickets(updated);
    localStorage.setItem("tickets", JSON.stringify(updated));
  };

  const handleEdit = (ticket: Ticket) => {
    setSelectedTicket(ticket);
    setShowForm(true);
  };

  // ✅ Create or update ticket dynamically
  const handleCreateOrUpdate = (data: TicketFormData) => {
    if (selectedTicket) {
      // Editing existing ticket
      const updatedTickets = tickets.map((t) =>
        t.id === selectedTicket.id ? { ...t, ...data } : t
      );
      setTickets(updatedTickets);
      localStorage.setItem("tickets", JSON.stringify(updatedTickets));
      toast.success("Ticket updated successfully");
    } else {
      // Creating new ticket
      const newTicket = createTicket(data);
      const updatedTickets = [...tickets, newTicket];
      setTickets(updatedTickets);
      localStorage.setItem("tickets", JSON.stringify(updatedTickets));
      toast.success("Ticket created successfully");
    }

    // Close and reset form
    setShowForm(false);
    setSelectedTicket(null);
  };

  const closeForm = (): void => {
    setShowForm(false);
    setSelectedTicket(null);
  };

  return (
    <div>
      <DashboardHeader />
      <main className="mt-30 px-5 md:px-7">
        <section>
          <h1 className="text-xl md:text-3xl text-foreground font-bold tracking-wide mb-3 mt-50 md:mt-0">
            Ticket Management
          </h1>
          <p>Create, view, edit and manage all your tickets</p>

          <button
            className="fixed top-30 right-10 bg-secondary text-white py-2 px-6 rounded-md hover:bg-primary-hover transition-colors font-medium"
            onClick={() => {
              setSelectedTicket(null);
              setShowForm(true);
            }}
          >
            Create New Ticket
          </button>
        </section>

        {showForm && (
          <TicketForm
            ticket={selectedTicket}
            onSubmit={handleCreateOrUpdate}
            onCancel={closeForm}
          />
        )}

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {tickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default TicketPage;
