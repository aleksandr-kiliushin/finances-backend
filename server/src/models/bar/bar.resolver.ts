import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'
import { BarService } from './bar.service'
import { Bar } from './entities/bar.entity'
import { CreateBarInput } from './dto/create-bar.input'
import { UpdateBarInput } from './dto/update-bar.input'

@Resolver(() => Bar)
export class BarResolver {
	constructor(private readonly barService: BarService) {}

	@Mutation(() => Bar)
	createBar(@Args('createBarInput') createBarInput: CreateBarInput) {
		return this.barService.create(createBarInput)
	}

	@Query(() => [Bar], { name: 'bar' })
	findAll() {
		return this.barService.findAll()
	}

	@Query(() => Bar, { name: 'bar' })
	findOne(@Args('id', { type: () => Int }) id: number) {
		return this.barService.findOne(id)
	}

	@Mutation(() => Bar)
	updateBar(@Args('updateBarInput') updateBarInput: UpdateBarInput) {
		return this.barService.update(updateBarInput.id, updateBarInput)
	}

	@Mutation(() => Bar)
	removeBar(@Args('id', { type: () => Int }) id: number) {
		return this.barService.remove(id)
	}
}
