// // contexts/TicketContext.js
// import React, { createContext, useContext, useState, useEffect } from "react";

// const TicketContext = createContext();

// export function useTickets() {
//   return useContext(TicketContext);
// }

// export function TicketProvider({ children }) {
//   const [tickets, setTickets] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Simulate fetching tickets from an API
//     const fetchTickets = async () => {
//       try {
//         // In a real app, this would be an API call
//         const savedTickets = localStorage.getItem("tickets");
//         if (savedTickets) {
//           setTickets(JSON.parse(savedTickets));
//         } else {
//           // Initialize with some sample data
//           const sampleTickets = [
//             {
//               id: 1,
//               title: "Login page not responsive",
//               description:
//                 "The login page is not working properly on mobile devices",
//               status: "open",
//               priority: "high",
//             },
//             {
//               id: 2,
//               title: "API timeout issues",
//               description: "API calls are timing out after 30 seconds",
//               status: "in_progress",
//               priority: "medium",
//             },
//             {
//               id: 3,
//               title: "Dashboard loading slow",
//               description:
//                 "Dashboard takes too long to load with large datasets",
//               status: "closed",
//               priority: "low",
//             },
//           ];
//           setTickets(sampleTickets);
//           localStorage.setItem("tickets", JSON.stringify(sampleTickets));
//         }
//       } catch (err) {
//         setError("Failed to load tickets. Please retry.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchTickets();
//   }, []);

//   const saveTickets = (updatedTickets) => {
//     setTickets(updatedTickets);
//     localStorage.setItem("tickets", JSON.stringify(updatedTickets));
//   };

//   const createTicket = (ticket) => {
//     const newTicket = {
//       ...ticket,
//       id: Date.now(),
//       createdAt: new Date().toISOString(),
//     };
//     const updatedTickets = [...tickets, newTicket];
//     saveTickets(updatedTickets);
//     return newTicket;
//   };

//   const updateTicket = (id, updatedTicket) => {
//     const updatedTickets = tickets.map((ticket) =>
//       ticket.id === id ? { ...ticket, ...updatedTicket } : ticket
//     );
//     saveTickets(updatedTickets);
//     return updatedTickets.find((ticket) => ticket.id === id);
//   };

//   const deleteTicket = (id) => {
//     const updatedTickets = tickets.filter((ticket) => ticket.id !== id);
//     saveTickets(updatedTickets);
//     return true;
//   };

//   const getTicketStats = () => {
//     const total = tickets.length;
//     const open = tickets.filter((ticket) => ticket.status === "open").length;
//     const inProgress = tickets.filter(
//       (ticket) => ticket.status === "in_progress"
//     ).length;
//     const closed = tickets.filter(
//       (ticket) => ticket.status === "closed"
//     ).length;

//     return { total, open, inProgress, closed };
//   };

//   const value = {
//     tickets,
//     isLoading,
//     error,
//     createTicket,
//     updateTicket,
//     deleteTicket,
//     getTicketStats,
//   };

//   return (
//     <TicketContext.Provider value={value}>{children}</TicketContext.Provider>
//   );
// }
