import React from 'react';
import "./Veg.css"

function Veg() {
  return (
    <div className="meal-plan-container">
      <h2 className="meal-plan-heading">Vegetarian Meal Plan</h2>

      <div>
        <h2>Meal 1: Pre-Workout (1-2 hours before workout)</h2>
        <p>Option 1: Whole grain toast with avocado and sliced tomatoes.</p>
        <p>Option 2: Overnight oats made with almond milk, chia seeds, and mixed berries.</p>
        <p>Option 3: Smoothie with spinach, banana, almond milk, and a scoop of protein powder.</p>
      </div>

      <div>
        <h2>Meal 2: Post-Workout (within 30 minutes after workout)</h2>
        <p>Plant-based protein shake with a banana.</p>
        <p>Quinoa salad with mixed vegetables and chickpeas.</p>
        <p>Baked tofu with sweet potatoes and steamed broccoli.</p>
      </div>

      <div>
        <h2>Meal 3: Mid-Morning Snack</h2>
        <p>Greek yogurt alternative with granola and mixed nuts.</p>
        <p>Rice cakes with almond butter and sliced strawberries.</p>
        <p>Cottage cheese alternative with pineapple chunks.</p>
      </div>

      <div>
        <h2>Meal 4: Lunch</h2>
        <p>Lentil soup with whole grain bread and a side salad.</p>
        <p>Grilled tempeh with quinoa and roasted vegetables.</p>
        <p>Chickpea salad with mixed greens, tomatoes, cucumber, and avocado.</p>
      </div>

      <div>
        <h2>Meal 5: Afternoon Snack</h2>
        <p>Hummus with carrot and celery sticks.</p>
        <p>Protein smoothie with kale, mango, and coconut water.</p>
        <p>Edamame beans with a sprinkle of sea salt.</p>
      </div>

      <div>
        <h2>Meal 6: Dinner</h2>
        <p>Vegetarian chili with kidney beans, tomatoes, onions, and peppers.</p>
        <p>Stir-fried tofu with brown rice and mixed vegetables.</p>
        <p>Spaghetti squash with marinara sauce and a side of sautéed spinach.</p>
      </div>

      <div>
        <h2>Meal 7: Before Bed Snack (optional)</h2>
        <p>A small bowl of mixed berries.</p>
        <p>A handful of almonds and walnuts.</p>
        <p>Avocado toast on whole grain bread.</p>
      </div>

      <p className="note-section">Ensure to drink plenty of water throughout the day to stay hydrated. Adjust portion sizes based on your individual calorie and macronutrient requirements.</p>
    </div>
  );
}

export default Veg;
