import React from "react";

function MakeRecipe({ data, deleteRecipe }) {
	return (
		<tbody>
			<tr>
				<td>
					<p>{data.name}</p>
				</td>
				<td>
					<p>{data.cuisine}</p>
				</td>
				<td>
					<img src={data.photo} alt={`${data.name}`} />
				</td>
				<td className="content_td p">
					<p>{data.ingredients}</p>
				</td>
				<td className="content_td p">
					<p>{data.preparation}</p>
				</td>
				<td>
					<button name="delete" onClick={() => deleteRecipe(data)}>
						Delete
					</button>
				</td>
			</tr>
		</tbody>
	);
}

export default MakeRecipe;
