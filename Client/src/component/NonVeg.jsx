import React from 'react';
import "./Nonveg.css";

function NonVeg() {
  return (
    <div className="meal-plan-container">
      <h2 className="meal-plan-heading">Non-Vegetarian Meal Plan</h2>
      <div>
        <h3>Meal 1: Pre-Workout (1-2 hours before workout)</h3>
        <ul className="meal-plan-list">
          <li>Oatmeal with sliced bananas and a tablespoon of almond butter.</li>
          <li>Greek yogurt with berries and a handful of almonds.</li>
          <li>Whole grain toast with avocado and a boiled egg.</li>
        </ul>
      </div>
      
      <div>
        <h3>Meal 2: Post-Workout (within 30 minutes after workout)</h3>
        <ul className="meal-plan-list">
          <li>Whey protein shake with a banana.</li>
          <li>Grilled chicken breast with quinoa and steamed vegetables.</li>
          <li>Turkey and avocado sandwich on whole grain bread.</li>
        </ul>
      </div>

      <div>
        <h3>Meal 3: Mid-Morning Snack</h3>
        <ul className="meal-plan-list">
          <li>Greek yogurt with mixed nuts and honey.</li>
          <li>Cottage cheese with pineapple chunks.</li>
          <li>Protein bar and an apple.</li>
        </ul>
      </div>

      <div>
        <h3>Meal 4: Lunch</h3>
        <ul className="meal-plan-list">
          <li>Grilled salmon with sweet potatoes and roasted broccoli.</li>
          <li>Lean beef stir-fry with brown rice and mixed vegetables.</li>
          <li>Quinoa salad with chickpeas, spinach, and feta cheese.</li>
        </ul>
      </div>

      <div>
        <h3>Meal 5: Afternoon Snack</h3>
        <ul className="meal-plan-list">
          <li>Hummus with carrot and cucumber sticks.</li>
          <li>Protein smoothie with spinach, banana, and almond milk.</li>
          <li>Cottage cheese with cherry tomatoes and whole grain crackers.</li>
        </ul>
      </div>

      <div>
        <h3>Meal 6: Dinner</h3>
        <ul className="meal-plan-list">
          <li>Baked chicken breast with quinoa and roasted asparagus.</li>
          <li>Turkey chili with black beans and diced vegetables.</li>
          <li>Stir-fried tofu with brown rice and mixed stir-fry vegetables.</li>
        </ul>
      </div>

      <div>
        <h3>Meal 7: Before Bed Snack (optional)</h3>
        <ul className="meal-plan-list">
          <li>Greek yogurt with a sprinkle of granola.</li>
          <li>Cottage cheese with sliced peaches.</li>
          <li>A small handful of almonds.</li>
        </ul>
      </div>
      
      <p className="note-section">Remember to stay hydrated throughout the day by drinking plenty of water. Additionally, adjust portion sizes according to your individual calorie and macronutrient needs.</p>
    </div>
  );
}

export default NonVeg;
