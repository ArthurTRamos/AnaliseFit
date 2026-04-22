import * as d3 from "d3";

// Função para gerar o gráfico de Linha
export function renderLineChart(container, data) {
    // Limpa o container para evitar duplicação em re-renders
    d3.select(container).selectAll("*").remove();

    const width = container.clientWidth || 400; // Fallback se não tiver largura
    const height = 200;
    const margin = { top: 10, right: 10, bottom: 25, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3.select(container)
        .append("svg")
        .attr("width", "100%")
        .attr("height", height)
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("preserveAspectRatio", "xMidYMid meet");

    const xScale = d3.scalePoint()
        .domain(data.map(d => d.date))
        .range([margin.left, width - margin.right])
        .padding(0.5);

    // Ajustado para calcular o máximo dinamicamente (ou manter fixo em 60)
    const maxY = d3.max(data, d => d.value) > 60 ? d3.max(data, d => d.value) : 60;
    
    const yScale = d3.scaleLinear()
        .domain([0, maxY]) 
        .range([height - margin.bottom, margin.top]);

    const yAxisGrid = d3.axisLeft(yScale)
        .tickSize(-innerWidth)
        .tickFormat("")
        .ticks(4);

    svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(yAxisGrid)
        .selectAll("line")
        .attr("stroke", "#e2e8f0")
        .attr("stroke-dasharray", "4,4");

    const yAxis = d3.axisLeft(yScale)
        .ticks(4)
        .tickFormat(d => `${d} km`)
        .tickSize(0)
        .tickPadding(10);

    svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(yAxis)
        .selectAll("text")
        .attr("fill", "#94a3b8")
        .style("font-size", "12px")
        .style("font-family", "inherit");

    svg.selectAll(".domain").remove();

    const xAxis = d3.axisBottom(xScale)
        .tickSize(0)
        .tickPadding(10)
        // Oculta alguns ticks dependendo da quantidade de dados para não encavalar
        .tickValues(data.filter((_, i) => i % 3 === 0).map(d => d.date));

    svg.append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(xAxis)
        .selectAll("text")
        .attr("fill", "#94a3b8")
        .style("font-size", "12px")
        .style("font-family", "inherit");

    svg.selectAll(".domain").remove();

    const lineGenerator = d3.line()
        .x(d => xScale(d.date))
        .y(d => yScale(d.value))
        .curve(d3.curveMonotoneX);

    svg.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "#008A52")
        .attr("stroke-width", 2.5)
        .attr("d", lineGenerator);
}

// Função para gerar o gráfico de Barras
export function renderBarChart(container, data) {
    d3.select(container).selectAll("*").remove();

    const width = container.clientWidth || 300;
    const height = 200;
    const margin = { top: 10, right: 10, bottom: 25, left: 55 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3.select(container)
        .append("svg")
        .attr("width", "100%")
        .attr("height", height)
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("preserveAspectRatio", "xMidYMid meet");

    const xScale = d3.scaleBand()
        .domain(data.map(d => d.label))
        .range([margin.left, width - margin.right])
        .padding(0.6);

    const maxY = d3.max(data, d => d.value) > 100 ? d3.max(data, d => d.value) : 100;

    const yScale = d3.scaleLinear()
        .domain([0, maxY])
        .range([height - margin.bottom, margin.top]);

    const yAxisGrid = d3.axisLeft(yScale)
        .tickSize(-innerWidth)
        .tickFormat("")
        .ticks(4);

    svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(yAxisGrid)
        .selectAll("line")
        .attr("stroke", "#e2e8f0")
        .attr("stroke-dasharray", "4,4");

    const yAxis = d3.axisLeft(yScale)
        .ticks(4)
        .tickFormat(d => d === 100 ? `>100 min` : `${d} min`)
        .tickSize(0)
        .tickPadding(10);

    svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(yAxis)
        .selectAll("text")
        .attr("fill", "#94a3b8")
        .style("font-size", "12px")
        .style("font-family", "inherit");

    svg.selectAll(".domain").remove();

    const xAxis = d3.axisBottom(xScale).tickSize(0).tickPadding(10);

    svg.append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(xAxis)
        .selectAll("text")
        .attr("fill", "#94a3b8")
        .style("font-size", "12px")
        .style("font-family", "inherit");

    svg.selectAll(".domain").remove();

    svg.append("line")
        .attr("x1", margin.left)
        .attr("x2", width - margin.right)
        .attr("y1", height - margin.bottom)
        .attr("y2", height - margin.bottom)
        .attr("stroke", "#e2e8f0");

    svg.selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", d => xScale(d.label))
        .attr("width", xScale.bandwidth())
        .attr("y", d => yScale(d.value))
        .attr("height", d => (height - margin.bottom) - yScale(d.value))
        .attr("fill", "#00A360")
        .attr("rx", 3);
}