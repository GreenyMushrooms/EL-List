import { localize } from '../util.js';
import { fetchmaps } from '../content.js';

import Spinner from '../components/Spinner.js';

export default {
    components: {
        Spinner,
        
    },
    data: () => ({
        submission: [],
        loading: true,
        maps: [],
        mapSearch: '',       // store user input
        mapName: '',
        searchError: false,  // track validation state   
    }),

    template:`
    <main v-if="loading">
            <Spinner></Spinner>
    </main>
    <main v-else class="page-submission-container">
        <div class="page-submission">
        <div class="map-container">
        
        </div>
        </div>
    </main>
    `,

    async mounted() {
        this.list = await fetchmaps()

        if (!this.list) {
            this.errors = [
                "Failed to load list. Retry in a few minutes or notify list staff.",
            ];
        }

        this.loading = false;
    },

     methods: { // Added methods section
        handleSubmit(event) {
            event.preventDefault();
            // Your form handling logic here
            console.log("Submitted map name:", this.mapName);
            
            // Example validation
            if (!this.mapName.trim()) {
                this.searchError = true;
                return;
            }
            
            // Proceed with submission
            this.searchError = false;
            // Add your submission logic here
        }
    },
}
        