import { useState } from "react";
import { Send } from "lucide-react";

const EnquiryForm = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I'm ${name}. I'd like to enquire about your safety net services. My number is ${mobile}.`;
    window.open(
      `https://wa.me/919100579116?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="bg-secondary py-6">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold font-heading text-secondary-foreground text-center mb-4">
          Send Quick Enquiry
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto"
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full sm:w-auto flex-1 px-4 py-3 rounded-lg bg-background text-foreground border-none outline-none text-sm"
          />
          <input
            type="tel"
            placeholder="Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            className="w-full sm:w-auto flex-1 px-4 py-3 rounded-lg bg-background text-foreground border-none outline-none text-sm"
          />
          <button
            type="submit"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            <Send className="w-4 h-4" />
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;
