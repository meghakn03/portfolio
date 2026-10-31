# Project ideas by role

These are proposals for future work, not claims about projects already built. LedgerLens and Folio already provide strong starting points in fintech operations, financial document search, AI-assisted retrieval and full-stack delivery. The next projects should add evidence in areas those repos do not show as deeply.

## Data Engineer

### 1. Folio ingestion reliability and lineage · strongest next step

Build an observable ingestion pipeline around Folio: versioned document records, idempotent reprocessing, schema and quality checks, retries with a dead-letter queue, and lineage from source file to extracted passage and embedding. Add a data-health view for freshness, failed runs, extraction completeness and duplicate detection.

**Demonstrate:** dependable ingestion, data modeling, backfills, data quality, lineage and operational recovery.

**Show:** a small architecture diagram, example failed run and recovery, quality metrics, and a reproducible local dataset. Keep each metric tied to a defined sample and method.

### 2. Public-data event warehouse

Create a batch pipeline from an openly available event dataset into a warehouse-style model. Add incremental loads, late-arriving event handling, deduplication, slowly changing dimensions, dbt-style transformations and documented data contracts. A simple dashboard should answer real questions from the modeled data.

**Demonstrate:** source-to-model pipeline design, analytics engineering, SQL, orchestration and clear data contracts. Choose a dataset with stable access and a license that permits reuse.

## Platform Engineer

### 1. A small internal developer platform

Create a template that lets a developer start a service with one command: app scaffold, local dependencies, health endpoints, structured logs, CI, and a repeatable deployment target. Add preview environments or a local Kubernetes path only if they improve the workflow. Document ownership, teardown and cost trade-offs.

**Demonstrate:** paved paths, infrastructure as code, deployment automation, developer experience and sensible operational defaults.

### 2. Reliability and incident drill for LedgerLens

Add service-level indicators for API availability and latency, dashboards, actionable alerts, and a short failure-injection walkthrough. Show how the service behaves when the database or a dependency is slow, how an operator finds the cause, and how to roll back.

**Demonstrate:** observability, SLO thinking, incident response and resilience, beyond provisioning infrastructure alone.

## AI Engineer

### 1. Agent reliability workbench · strongest next step

Build a replay tool for synthetic or scrubbed MCP traces. Group tool calls into runs, flag loops and repeated failures, compare prompt or tool changes, and show latency and token use alongside the trace. Include an evaluation set with expected tool choices and outcomes, plus a short example where a change improves one metric but regresses another.

**Demonstrate:** agent evaluation, tool-use reliability, observability, reproducibility and thoughtful failure analysis.

### 2. Human-reviewed extraction pipeline

Extend Folio with structured extraction for a narrow set of financial fields. Keep source spans and page citations attached to every field, validate outputs with deterministic rules, route uncertain cases for review, and measure field-level accuracy on a small labeled set.

**Demonstrate:** LLM integration, schema-constrained output, grounding, confidence handling and evaluation. Treat confidence as a routing signal until it is calibrated against data.

## Software Engineer

### 1. Incident room for small teams

Build a polished application for recording an incident timeline, assigning actions, sharing status updates and reviewing what happened afterward. Use a typed API, persistent storage, realtime updates, accessible keyboard interactions, audit history and graceful reconnect behavior.

**Demonstrate:** product thinking, frontend state, API and data design, realtime behavior, accessibility and edge-case handling in one coherent product.

### 2. Reusable document review workspace

Build a focused review UI that lets people search, highlight, annotate and revisit evidence across documents. Keep keyboard navigation, responsive layout, durable notes and clear source references central to the experience. Avoid expanding Folio's search backend; make the distinct contribution the interface and workflow quality.

**Demonstrate:** interaction design, component architecture, accessibility, client-side state and robust integration with an existing API.

## Recommended sequence

1. **Data:** add run records, lineage and quality gates to Folio. This extends a project that already has a clear use case and visible source citations.
2. **AI:** build trace replay and evaluation fixtures. Use synthetic data so the demo is safe to share and straightforward to reproduce.
3. **Platform:** add a narrow deployment and reliability story to LedgerLens or the agent workbench. Publish the architecture, failure drill and teardown steps.
4. **Software:** build the incident room as a separate, user-facing product with a short walkthrough. This adds a distinct end-to-end application story.

For each finished project, publish a short demo, an architecture sketch, one measured result with its evaluation method, and a README that explains how to reproduce it. Prefer one complete project at a time; list unfinished ideas as planned work rather than portfolio projects.
