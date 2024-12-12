import { useState } from "react"

export default function UserInput() {
    
    return (
        <section id= "user-input">
        <div className="input-group">
        <p>
            <label> Initial Investment </label>
                <input 
                type="number" 
                required
                value={UserInput.initialInvestment}
                onChange={(event) => 
                handleChange('initialInvestment',event.target.value)}/>
        </p>
        <p>
            <label> Annual Investment</label>
                <input type="number" 
                required
                 value={UserInput.annualInvestment}
                 onChange={(event) => 
                 handleChange('annualInvestment',event.target.value)}/>
        </p>
        </div>

        <div className="input-group">
        <p>
            <label> Expected Return </label>
                <input type="number" 
                required
                value={UserInput.excpectedReturn}
                onChange={(event) => 
                handleChange('excpectedReturn',event.target.value)}/>
                
        </p>
        <p>
            <label> Duration Investment</label>
                <input type="number" 
                required
                value={UserInput.duration}
                onChange={(event) => 
                handleChange('duration',event.target.value)}/>
        </p>
        </div>
    </section>
    )
}