/**
 * CATEGORY VIEW - STUDENTS IMPLEMENT
 * Group data by categories
 */

function orNotListed(value) {
  return value === '------' || value === 'N/A' || value === undefined ? 'Not listed' : value;
}

function showCategories(data) {
  // Requirements:
  // - Group data by one meaningful field (category, city, inspection result, etc.)
  // - Show how many records are in each group, plus one other number per group
  //   (an average, a highest, a lowest)
  // - Show items within each group
  // - Make the groups easy to compare, and visually distinct from their items



  const groupedCities = data.reduce((counts, item) => {
  
  if (!counts[item.city]) {
    counts[item.city] = [];
  }
  
  counts[item.city].push(item);
  return counts;
}, 
{}
);

const citySort = Object.entries(groupedCities)
  .map(([city, item]) => `
    <div>
      <p class="category-header">${city}</p>
      <ul class="category-items">

         ${item.map(restaurant => `
        <li class="category-item"> <strong>${restaurant.name}</strong> </br>
         ${restaurant.address_line_1} </br>
         ${orNotListed(restaurant.category)} </br>
         <div><u>Inspection Result</u>: ${orNotListed(restaurant.inspection_results)}</div></li>`).join("")}
        

      </ul>
    </div>
  `)
  .join("");



  /*html*/
  return `
                <h2 class="view-title">📂 Category View</h2>
                <div class="todo-implementation">
                    <h3>TODO: Implement Category View</h3>
                    <p><strong>Your task:</strong> Group the data by categories to show relationships</p>
                    <p><strong>Good for:</strong> Understanding patterns, finding similar items, exploring by type</p>
                    <p><strong>Consider:</strong> Group by type of business? City? Inspection result? What tells the best story?</p>
                    <p><strong>Types of business in this data:</strong> ${[
                      ...new Set(data.map((item) => item.category)),
                    ].join(", ")}</p>
                </div>

              <div class="category-section">${citySort}</div>
            `;
}

export default showCategories;