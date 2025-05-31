
import { fetchmaps } from '../js/content.js';

import Spinner from '../js/components/Spinner.js';

export default {
    components: {
        Spinner,
        
    },
    data: () => ({
        submission: [],
        loading: true,
        maps: [],
        userName: '',       // store user stuff
        mapName: '',
        ytLink:'',   
    }),

    template:`
    <main v-if="loading">
            <Spinner></Spinner>
    </main>
    <main v-else class="page-submission-container">
        <div class="page-submission">
            <div class="map-container">
                <form class="options" @submit.prevent="handleSubmit">
                    <div class="SubmitExplanation">
                    <h2> Enter info.</h2>
                    </div><br>    
                    
                    <div class="mapInput">
                    <input id="mapSearch" type="text" placeholder="Type the name of the map" value="">
                    </div><br>

                    <div class="User">
                    <input id="mapSearch" type="text" placeholder="Type your username" value="">
                    </div><br>

                    <div class="ytLink">
                    <input id="mapSearch" type="text" placeholder="paste your yt video" value="">
                    </div>

                    <button class="SubmitButton" type="submit" class="submit-btn">Submit</button>
                </form>
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

     methods: {
  async handleSubmit() {
    if (!this.mapName.trim() || !this.userName.trim() || !this.ytLink.trim()) {
      this.searchError = true;
      alert("Please fill all required fields!");
      return;
    }

    try {
      
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  },
},
}
        