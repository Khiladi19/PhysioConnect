import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BookingModal from "../components/BookingModal";
import { DOCTORS } from "../data/doctors";

export default function Booking() {
  const [searchParams] = useSearchParams();
  const docId = searchParams.get("doc");
  const [open, setOpen] = useState(true);
  const [prefill, setPrefill] = useState(null);

  useEffect(() => {
    if (docId) {
      const d = DOCTORS.find((x) => String(x.id) === String(docId));
      setPrefill(d || null);
    }
  }, [docId]);

  return (
    <div>
      <BookingModal
        open={open}
        onClose={() => setOpen(false)}
        prefillDoc={prefill}
      />
      {!open && (
        <div className="p-6">
          You closed booking. <a href="/">Go Home</a>
        </div>
      )}
    </div>
  );
}
