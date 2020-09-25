import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AutoSearchService } from 'src/app/services/auto-search.service';
import { IAgentSearchParams } from 'src/app/models/IAgentSearchParams';
import { IAgentSearchResults } from 'src/app/models/IAgentSearchResults';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit, OnDestroy {

  agentsFormGroup: FormGroup;
  searchData: IAgentSearchResults;
  $searchData: Subscription;

  constructor(private fb: FormBuilder, private searchService: AutoSearchService) { }


  ngOnInit(): void {
    this.agentsFormGroup = this.fb.group({
      searchBox: new FormControl()
    })
  }

  searchAgents() {
    const searchKey = this.agentsFormGroup.value.searchBox;
    if (searchKey) {
      const queryParams: IAgentSearchParams = {
        SearchTerm: searchKey,
      }
      this.$searchData = this.searchService.getSearchResults<IAgentSearchResults>(queryParams).subscribe((response) => {
        this.searchData = response
      });
    }
    else {
      alert("enter a text to search");
    }
  }

  ngOnDestroy(): void {
    if (this.$searchData) {
      this.$searchData.unsubscribe();
    }
  }
}