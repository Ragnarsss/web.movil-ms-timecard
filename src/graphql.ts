
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateTimeCardInput {
    userId: number;
    periodStart: Date;
}

export interface UpdateTimeCardInput {
    periodStart?: Nullable<Date>;
    periodEnd?: Nullable<Date>;
}

export interface TimeCard {
    id: string;
    userId: number;
    periodStart?: Nullable<Date>;
    periodEnd?: Nullable<Date>;
}

export interface IQuery {
    findAll(): Nullable<TimeCard>[] | Promise<Nullable<TimeCard>[]>;
    findOne(id: number): Nullable<TimeCard> | Promise<Nullable<TimeCard>>;
}

export interface IMutation {
    create(createTimeCardInput: CreateTimeCardInput): TimeCard | Promise<TimeCard>;
    update(updateTimeCardInput: UpdateTimeCardInput): TimeCard | Promise<TimeCard>;
    remove(id: number): Nullable<TimeCard> | Promise<Nullable<TimeCard>>;
}

type Nullable<T> = T | null;
