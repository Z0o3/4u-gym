"use client";

import { useState } from "react";

type PricingPlan = {
  name: string;
  price: string;
  detail: string;
};

type PricingSelectorProps = {
  plans: readonly PricingPlan[];
};

export function PricingSelector({ plans }: PricingSelectorProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedPlan = plans[selectedIndex];

  return (
    <>
      <div className="pricing-grid" role="group" aria-label="Selecciona un precio">
        {plans.map((plan, index) => {
          const isSelected = selectedIndex === index;

          return (
            <button
              className={isSelected ? "price-card price-card-selected" : "price-card"}
              type="button"
              aria-pressed={isSelected}
              onClick={() => setSelectedIndex(index)}
              key={plan.name}
            >
              <p>{plan.name}</p>
              <strong>{plan.price}</strong>
              <span className="price-card-detail">{plan.detail}</span>
              <span className="price-card-action" aria-hidden="true">
                {isSelected ? "Seleccionado" : "Seleccionar"}
              </span>
            </button>
          );
        })}
      </div>

      <p className="price-selection" aria-live="polite">
        <span>Selección actual</span>
        <strong>{selectedPlan.name} · {selectedPlan.price}</strong>
      </p>
    </>
  );
}
