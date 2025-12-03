import React from "react";

const BlogPosts = () => {
  const blogs = [
    {
      title: "The Importance of Regular Pet Grooming",
      content: `Regular pet grooming is far more than making pets look clean—it is an essential part of their overall health and happiness. Grooming removes dirt, dead skin cells, loose fur, and harmful bacteria from your pet’s body. Pets with longer coats can develop painful mats that pull at their skin and lead to infections. Brushing helps distribute natural oils, which keeps their coat shiny and prevents dryness. 

Beyond appearance, grooming sessions give owners a chance to detect early signs of health issues. You may notice bumps, rashes, ticks, fleas, or unusual odors that indicate infections. Early detection always makes treatment easier and less expensive. Grooming also reduces shedding, which keeps your home cleaner and reduces allergens inside the house.

Nail trimming is another crucial part of grooming. Overgrown nails can cause pain, affect walking posture, and even lead to joint problems. Ear and teeth cleaning are equally important to prevent infections and maintain long-term oral health. 

Regular grooming improves circulation, promotes relaxation, and strengthens the bond between pets and their owners. In summary, grooming is not optional—it is a key habit to ensure your pet lives a comfortable, healthy, and joyful life.`,
    },
    {
      title: "How to Choose the Right Pet Food for Your Furry Friend",
      content: `Choosing the right food for your pet is one of the most important decisions you will make as a pet parent. A balanced diet impacts energy levels, coat health, digestion, and lifespan. However, with hundreds of brands available, picking the right one can be confusing. The first step is understanding your pet’s needs based on their age, breed, and lifestyle. Puppies and kittens need high-protein food for rapid growth, while senior pets need lower-calorie and joint-supportive diets.

Always read the ingredient list. Foods with real meat, vegetables, and whole grains are healthier than brands filled with corn, soy, and artificial preservatives. Consider your pet’s allergies as well—some pets are sensitive to chicken, wheat, or dairy. Consulting a veterinarian is the best way to determine if your pet requires a specialized diet, such as grain-free, high-protein, or low-fat options.

Avoid foods that include filler ingredients or artificial colors, as these provide no nutritional benefits. Monitor how your pet reacts to new food—look for changes in stool, coat shine, appetite, and energy levels. A good diet should make your pet active, happy, and healthy.

Remember: the right food can drastically improve your pet’s overall quality of life.`,
    },
    {
      title: "Top Benefits of Professional Pet Sitting Services",
      content: `Professional pet sitting services have become extremely popular because they offer comfort, safety, and peace of mind when pet owners are away. Unlike a crowded boarding facility, a pet sitter allows your pet to stay in its familiar environment. Pets experience less stress, maintain their usual routine, and feel more secure when they are at home. 

Pet sitters provide personalized attention based on your pet’s needs—feeding, playtime, medication, bathroom breaks, and companionship. This one-on-one care is especially beneficial for senior pets, pets with medical conditions, or those with anxiety issues. A trained sitter knows how to handle emergencies, identify unusual behaviors, and provide quick assistance if something goes wrong.

Besides caring for pets, sitters also help with basic household tasks such as watering plants, taking mail inside, and ensuring your home remains safe. This adds an extra layer of security while you are traveling.

Professional pet sitting ensures your furry friend stays comfortable and happy without feeling lonely, making it a perfect alternative to traditional boarding.`,
    },
    {
      title: "Why Vaccinations Are Essential for Your Pet’s Health",
      content: `Vaccinations are one of the most effective ways to protect pets from life-threatening diseases. Core vaccines protect against rabies, parvovirus, distemper, and other dangerous illnesses that can spread quickly. These diseases can cause severe symptoms, long-term complications, or even death if not prevented through vaccination.

Vaccines strengthen your pet’s immune system, helping them fight off infections if they come into contact with harmful viruses or bacteria. Booster shots are equally important—they ensure immunity remains strong over time. Without boosters, your pet may become vulnerable again.

Keeping your pets vaccinated also protects other pets in your community. Some diseases spread easily in parks, grooming salons, or boarding centers. Vaccinated pets reduce the risk of outbreaks and help maintain safer environments for all animals. In some cases, vaccines also prevent diseases that can spread to humans.

Veterinarians follow recommended vaccination schedules based on your pet’s age, health condition, and lifestyle. Following these guidelines keeps your pets healthy, active, and safe.

In summary, vaccinations are not optional—they are essential for long-term health, community safety, and a healthier life for your beloved pet.`,
    },
  ];

  return (
    <div className="mt-10">
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-bold text-orange-600 mb-3">
              {blog.title}
            </h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {blog.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
