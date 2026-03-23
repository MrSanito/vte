"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const LeadForm = ({ open, onOpenChange }) => {
  const [form, setForm] = useState({
    name: "",
    number: "",
    email: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form, // spread existing form values
      [e.target.id]: e.target.value, // update the field by its id
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ Prevent page refresh

    const payload = {
      name: form.name,
      number: form.number,
      email: form.email,
    };
    const res = await fetch("/api/send-whatsapp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "918735972509", // Updated primary WhatsApp number
        ...payload,
     
      }),
    });

    const json = await res.json();
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md p-6 bg-white dark:bg-gray-900 border-none shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black text-gray-900 dark:text-white">Quick Inquiry</DialogTitle>
          <DialogDescription className="text-gray-500 dark:text-gray-400">
            Send us your requirements and we'll get back to you on WhatsApp instantly.
          </DialogDescription>
        </DialogHeader>

        <form className="grid gap-6 mt-6" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-gray-400">Full Name</Label>
            <Input
              id="name"
              placeholder="Your Name"
              className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 h-12"
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="number" className="text-sm font-bold uppercase tracking-wider text-gray-400">WhatsApp Number</Label>
            <Input
              id="number"
              placeholder="+91 87359 72509"
              className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 h-12"
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-gray-400">Email Address</Label>
            <Input
              id="email"
              placeholder="john@example.com"
              className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 h-12"
              onChange={handleChange}
            />
          </div>

          <DialogFooter className="mt-4 gap-3">
            <DialogClose asChild>
              <Button variant="ghost" className="font-bold">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-black px-8 h-12 rounded-xl transition-all shadow-lg shadow-green-600/20 flex-1">
              Submit on WhatsApp
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadForm;
