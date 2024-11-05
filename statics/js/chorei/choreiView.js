function choreiView() {
    console.log('choreiView is being called');
    const html = /*HTML*/`
        <h1>Chorei område:</h1>
        <div>
            <button onclick="navigateToChoreiView('chorei')">Chorei</button>
            <button onclick="navigateToChoreiView('journal')">Logg</button>
            <button onclick="navigateToChoreiView('moodle')">Moodle</button>
        </div>
        <div>
            <h2>Dagens Chorei:</h2>
            <div>
                <label for="choreiNote1">Input humør: Område for elev å notere</label>
                <textarea id="choreiNote1" oninput="model.input.choreiPage.mood = this.value"></textarea>
            </div>
            <div>
                <label for="choreiNote2">Input samarbeid: Område for elev å notere</label>
                <textarea id="choreiNote2" oninput="model.input.choreiPage.collabration = this.value"></textarea>
            </div>
            <div>
                <label for="choreiNote2">Input nøkkelkomp/chorei: Område for elev å notere</label>
                <textarea id="choreiNote2" oninput="model.input.choreiPage.chorei = this.value"></textarea>
            </div>
            <div>
                <label for="choreiNote2">Input koding: Område for elev å notere</label>
                <textarea id="choreiNote2" oninput="model.input.choreiPage.code = this.value"></textarea>
            </div>
            <button onclick="saveLogEntry()">Lagre Chorei</button>
        </div>
        <div>
            <h2>Relatert info for i dag:</h2>
            <ul>
                <li>Psykologisk trygghet</li>
                <li>Locus of Control</li>
                <li>Growth mindset</li>
                <li>Focused and Diffused brain mode</li>
                <li>Pomodoro teknikk</li>
            </ul>
        </div>
        <div>
            <h2>Chorei arkiv:</h2>
            <table>
                <tr>
                    <th>Chorei Nummer</th>
                    <th>Dato</th>
                </tr>
                ${model.data.archive.map(archive => `
                    <tr>
                        <td>${archive.name}</td>
                        <td>${archive.date}</td>
                    </tr>
                `).join('')}
            </table>
        </div>
    `;

    document.getElementById('app').innerHTML = html;
}
