import React, { useState, useEffect } from "react";
import type { Ticket, TicketFormData } from "../../types/types";

type FormErrors = Partial<Record<keyof TicketFormData, string>>;

interface TicketFormProps {
  ticket?: Ticket | null;
  onSubmit: (data: TicketFormData) => void;
  onCancel: () => void;
}

function TicketForm({ ticket, onSubmit, onCancel }: TicketFormProps) {
  const [formData, setFormData] = useState<TicketFormData>({
    title: "",
    description: "",
    status: "OPEN",
    priority: "LOW",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // Pre-fill form if editing
  useEffect(() => {
    if (ticket) {
      setFormData({
        title: ticket.title || "",
        description: ticket.description || "",
        status: (ticket.status as "OPEN" | "IN_PROGRESS" | "CLOSED") || "OPEN",
        priority: (ticket.priority as "LOW" | "MEDIUM" | "HIGH") || "LOW",
      });
    }
  }, [ticket]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.status) {
      newErrors.status = "Status is required";
    } else if (!["OPEN", "IN_PROGRESS", "CLOSED"].includes(formData.status)) {
      newErrors.status = "Status must be one of: open, in_progress, closed";
    }

    if (formData.description && formData.description.length > 500) {
      newErrors.description = "Description must be less than 500 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <article className="fixed top-0 left-0 z-50 w-full h-screen bg-primary/70 backdrop-blur-xs flex justify-center items-center">
      <div className="max-w-2xl w-full border border-foreground rounded-md px-10 py-3 backdrop-blur-2xl shadow-2xl bg-primary">
        <h2 className="text-2xl font-bold text-foreground text-center mb-6">
          {ticket ? "Edit Ticket" : "Create New Ticket"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Title <span className="text-error">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
                errors.title ? "border-error" : "border-gray-300"
              }`}
            />
            {errors.title && (
              <p className="mt-1 text-sm text-error">{errors.title}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Description{" "}
              <span className="italic text-foreground/70">(Optional)</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
                errors.description ? "border-error" : "border-gray-300"
              }`}
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Status <span className="text-error">*</span>
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className={`bg-primary/90 w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
                errors.status ? "border-error" : "border-gray-300"
              }`}
            >
              <option value="OPEN">Open</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="CLOSED">Closed</option>
            </select>
            {errors.status && (
              <p className="mt-1 text-sm text-error">{errors.status}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="priority"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Priority
            </label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="bg-primary/90 w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            >
              <option value="LOW">Low</option>
              <option value="MEDIUM">Medium</option>
              <option value="HIGH">High</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-7 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="border border-secondary text-secondary py-2 px-6 rounded-md hover:bg-secondary/40 cursor-pointer transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-secondary text-foreground py-2 px-6 rounded-md hover:bg-secondary/40 cursor-pointer transition-colors font-medium"
            >
              {ticket ? "Update Ticket" : "Create Ticket"}
            </button>
          </div>
        </form>
      </div>
    </article>
  );
}

export default TicketForm;
